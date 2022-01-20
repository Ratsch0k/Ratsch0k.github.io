import {NextPage} from 'next'
import {useRouter} from 'next/dist/client/router'
import {ReactNode, TouchEventHandler, useCallback, useEffect, useRef, useState, WheelEventHandler} from 'react'
import {useTranslation} from 'react-i18next'
import LanguageSwitch from '../components/language_switch'
import PageIndicator from '../components/page_indicator'
import AboutMe from './about_me'
import Intro from './intro'
import Projects from './projects'
import tailwindConfig from '../components/tailwind-config';
import IndicateSwipeMotion from '../components/indicate-swipe-motion'
import SkillsPage from './skills'
import convert from 'color-convert';
import {PageComponent} from '../components/Page';

const primaryColor = convert.hex.rgb(tailwindConfig.theme.colors.primary.DEFAULT);

interface PageInfo {
  component: PageComponent,
  path: string;
  titleKey: string;
}

const initialState: PageInfo[] = [
  {
    component: Intro,
    path: '/',
    titleKey: 'intro.pageTitle',
  },
  {
    component: AboutMe,
    path: '/about-me',
    titleKey: 'aboutme.pageTitle',
  },
  {
    component: SkillsPage,
    path: '/skills',
    titleKey: 'skills.pageTitle',
  },
  {
    component: Projects,
    path: '/projects',
    titleKey: 'projects.pageTitle',
  },
];

const Home = () => {
  const {t} = useTranslation();
  const [initialPos, setInitialPos] = useState<{x: number, y: number}>();
  const router = useRouter();
  const [pages, setPages] = useState<PageInfo[]>(initialState); 
  const [hasNavigated, setHasNavigated] = useState<boolean>(sessionStorage.getItem('hasNavigated') === 'true' || false);
  const [firstPage, setFirstPage] = useState<boolean>(true);
  const inTransition = useRef<boolean>(false);

  const getPageIndex = useCallback((path) => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].path === path) {
        return i;
      }
    }
    return 0;
  }, [pages]);
  const [currentPage, setCurrentPage] = useState<number>(getPageIndex(router.asPath));

  /**
   * Indicates whether the page is bigger than the screen and thus scrollable.
   *
   * Should be set from the page. If true, the footer will have a top border
   */
  const [scrollable, setScrollable] = useState<boolean>(false);

  /**
   * Keeps track of the scrollable value of each page.
   */
  const [scrollMap, setScrollMap] = useState<{[index: number]: boolean}>({});

  const handleSetScrollable = useCallback((page: number) => (value: boolean) => {
    setScrollMap((prev) => ({
      ...prev,
      [page]: value,
    }));

    if (currentPage === page) {
      setScrollable(value);
    }
  }, [currentPage]);

  useEffect(() => {
    setCurrentPage(getPageIndex(router.asPath));
  }, [router.asPath]);

  const toPage = useCallback((pageId: number) => {
    let transId: NodeJS.Timeout | undefined = undefined;
    if (!inTransition.current && pageId >= 0 && pageId < pages.length) {
      setHasNavigated(true);
      setFirstPage(false);
      sessionStorage.setItem('hasNavigated', 'true');
      inTransition.current = true;
      transId = setTimeout(() => {inTransition.current = false}, 0);
      setPages((prev) => {
        const arr = Array.from(prev);
        return arr; 
      });
      setCurrentPage(pageId);

      if (scrollMap[pageId] !== undefined) {
        setScrollable(scrollMap[pageId]);
      }

      const nextPage = pages[pageId];
      window.history.pushState(nextPage.path, t(nextPage.titleKey), nextPage.path)
    }

    return () => {
      clearTimeout(transId as unknown as number);
    }
  }, [pages, currentPage, scrollMap])

  const toNextPage = useCallback(() => {
    toPage(currentPage + 1);
  }, [currentPage, toPage]);

  const toPrevPage = useCallback(() => {
    toPage(currentPage - 1);
  }, [currentPage, toPage]);

  const handleScroll: WheelEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!inTransition.current) {
      if (event.deltaX < -100) {
        toPrevPage()
      } else if (event.deltaX > 100) {
        toNextPage();
      }
    }
  }, [toPrevPage, toNextPage, inTransition.current])

  const handleDragEnter: TouchEventHandler<HTMLDivElement> = useCallback((event) => {
    if (event.touches && event.touches.length === 1) {
      const touch = event.touches.item(0);
      if (touch !== null) {
        setInitialPos({x: touch.screenX, y: touch.screenY});
      }
    }
  }, [setInitialPos])

  const handleDragEnd: TouchEventHandler<HTMLDivElement> = useCallback((event) => {
    if (initialPos !== undefined && event.changedTouches && event.changedTouches.length === 1) {
      const touch = event.changedTouches.item(0);
      if (touch !== null) {
        if (initialPos.x - touch.screenX > 80) {
          toNextPage()
        } else if (initialPos.x - touch.screenX < -80) {
          toPrevPage()
        }
      }
    }
  }, [initialPos, toNextPage, toPrevPage])

  return (
    <div>
        <div id='modal-root'/>
        <div
          className='absolute right-4 z-30 md:top-4 bottom-0 text-primary-dark'
        >
          <LanguageSwitch />
        </div>
        <div
          className='absolute bottom-0 z-20 w-full pr-2 sm:pr-0'
        >
          <div
            style={{
              backdropFilter: 'blur(8px)',
              backgroundColor: `rgba(${primaryColor[0]}, ${primaryColor[1]}, ${primaryColor[2]}, 0.5)`,
            }}
          >
            <div className={`p-4 flex justify-center border-primary-dark ${scrollable && 'border-t'}`}>
              <div className='flex flex-col items-center bg-primary px-2 rounded-lg border border-white'>
                {
                  (!hasNavigated && window.innerWidth <= Number.parseInt(tailwindConfig.theme.screens.lg, 10)) &&
                  <IndicateSwipeMotion />
                }
                <PageIndicator len={pages.length} page={currentPage} changePage={(id) => toPage(id)}/>
              </div>
            </div>
          </div>
        </div>
      <div className='overflow-hidden'>
        {
          pages.map((page, index) => {
            const ThisPage = page.component;

            return (
              <Page
                handleDragEnd={handleDragEnd}
                handleDragEnter={handleDragEnter}
                handleScroll={handleScroll}
                currentPage={currentPage}
                id={index}
                key={`page-${index}`}
              >
                <ThisPage setScrollable={handleSetScrollable(index)} firstPage={firstPage}/>
              </Page>
            );
          })
        }
      </div>
    </div>
  )
}

interface PageProps {
  /**
   * The components which should be used as a page.
   */
  children: ReactNode;

  /**
   * The currently displayed page.
   */
  currentPage: number;

  /**
   * Page id of this page.
   */
  id: number;

  /**
   * Wheel event handler.
   */
  handleScroll: WheelEventHandler<HTMLDivElement>;

  /**
   * TouchEventHandler for handling the start of a drag event.
   */
  handleDragEnter: TouchEventHandler<HTMLDivElement>;

  /**
   * TouchEventHandler for handling the end of a drag event.
   */
  handleDragEnd: TouchEventHandler<HTMLDivElement>;
}

/**
 * Wrapper for pages.
 * 
 * Handles animation and loading of page.
 * Implemented lazy loading, meaning, the page will only load
 * if it is navigated to. This is to allow any animations to
 * show on the first load. But it if it has been visited it will
 * keep the component loaded to avoid animations to be shown more
 * than two times.
 * @param props Props.
 * @returns The component
 */
const Page: NextPage<PageProps> = (props) => {
  const {
    children,
    currentPage,
    id,
    handleDragEnter,
    handleDragEnd,
    handleScroll,
  } = props;
  /**
   * Whether this page has already been visited. Defaults to `false`.
   */
  const [visited, setVisited] = useState<boolean>(false);

  /**
   * The position of this component for the transition animation.
   * Used in the following css line `translate: transformY({pos}%)`.
   */
  const [pos, setPos] = useState<number>(0);

  const [eventHandlersEnabled, setEventHandlersEnabled] = useState<boolean>(false);

  /**
   * Set pos according to currentPage and id of this page.
   * If the current page is above this page (it's id is lower),
   * the position of this page should be below that (100%).
   * Vice versa.
   */
  useEffect(() => {
    if (currentPage === id) {
      setPos(0);
    } else {
      if (id > currentPage) {
        setPos(100);
      } else {
        setPos(-100);
      }
    }
    
  }, [currentPage, id]);

  useEffect(() => {
    let possibleTimeout: NodeJS.Timeout | undefined = undefined;
    if (currentPage === id) {
      possibleTimeout = setTimeout(() => {
        setEventHandlersEnabled(true);
      }, 750);
    } else {
      setEventHandlersEnabled(false);
    }

    return () => {
      clearTimeout(possibleTimeout as unknown as number);
    }
  }, [currentPage, id]);

  useEffect(() => {
    if (currentPage === id) {
      setVisited(true);
    }
  }, [currentPage, id])

  return (
    <div
      className='absolute w-full overflow-hidden'
      style={{
        height: '100%',
        zIndex: currentPage === id ? 10 : 0,
      }}
    >
      <div
        key={`page-${id}`}
        className='h-full w-full overflow-y-auto overflow-x-hidden'
        style={{
          transition: 'transform ease-out 500ms, opacity ease-in 250ms',
          opacity: currentPage === id ? 1 : 0,
          transform: currentPage === id ? 'translateX(0)' : `translateX(${pos}%)`,
        }} 
        onWheel={eventHandlersEnabled ? handleScroll : undefined}
        onTouchStart={eventHandlersEnabled ? handleDragEnter : undefined}
        onTouchEnd={eventHandlersEnabled ? handleDragEnd : undefined}
      >
        {
          visited || currentPage === id ?
          children :
          null  
        }
      </div>
    </div>
  );
};

export default Home;