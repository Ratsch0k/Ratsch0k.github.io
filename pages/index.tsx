import { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { ReactNode, TouchEventHandler, useCallback, useEffect, useRef, useState, WheelEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../components/language-switch'
import PageIndicator from '../components/page-indicator'
import AboutMe from './_about-me'
import Intro from './_intro'
import Projects from './_projects'

interface PageInfo {
  component: () => JSX.Element,
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
    component: Projects,
    path: '/projects',
    titleKey: 'projects.pageTitle',
  },
];

const Home = () => {
  const { t } = useTranslation();
  const [initialPos, setInitialPos] = useState<{x: Number, y: number}>();
  const router = useRouter();
  const [pages, setPages] = useState<PageInfo[]>(initialState); 

  const getPageIndex = useCallback((path) => {
    for (let i = 0; i < pages.length; i++) {
      if (pages[i].path === path) {
        return i;
      }
    }
    return 0;
  }, [pages]);
  
  const [currentPage, setCurrentPage] = useState<number>(getPageIndex(router.asPath));
  const inTransition = useRef<boolean>(false);

  useEffect(() => {
    setCurrentPage(getPageIndex(router.asPath));
  }, [router.asPath]);

  const toPage = useCallback((pageId: number) => {
    let transId: NodeJS.Timeout | undefined = undefined;
    if (!inTransition.current && pageId >= 0 && pageId < pages.length) {
      inTransition.current = true;
      transId = setTimeout(() => {inTransition.current = false}, 500);
      setPages((prev) => {
        const arr = Array.from(prev);
        return arr; 
      });
      setCurrentPage(pageId);
      const nextPage = pages[pageId];
      window.history.pushState(nextPage.path, t(nextPage.titleKey), nextPage.path)
    }

    return () => {
      clearTimeout(transId as unknown as number);
    }
  }, [pages, currentPage])

  const toNextPage = useCallback(() => {
    toPage(currentPage + 1);
  }, [currentPage, toPage]);

  const toPrevPage = useCallback(() => {
    toPage(currentPage - 1);
  }, [currentPage, toPage]);

  const handleScroll: WheelEventHandler<HTMLDivElement> = useCallback((event) => {
    if (!inTransition.current) {
      if (event.deltaY < 0) {
        toPrevPage()
      } else if (event.deltaY > 0) {
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
        if (initialPos.y - touch.screenY > 80) {
          toNextPage()
        } else if (initialPos.y - touch.screenY < -80) {
          toPrevPage()
        }
      }
    }
  }, [initialPos, toNextPage, toPrevPage])

  return (
    <>
    <div className='absolute right-4 md:top-4 bottom-4 text-primary-dark z-20'>
      <LanguageSwitch />
    </div>
    <div className='absolute bottom-2 z-20 w-full flex justify-center'>
      <PageIndicator len={pages.length} page={currentPage} changePage={(id) => toPage(id)}/>
    </div>
    <div className="overflow-auto">
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
            >
              <ThisPage/>
            </Page>
          );
        })
      }
    </div>
    </>
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
    if (currentPage === id) {
      setVisited(true);
    }
  }, [currentPage, id])

  return (
    <div
      key={`page-${id}`}
      className='absolute h-full w-full overflow-hidden'
      style={{
        transition: 'transform ease-out 500ms, opacity ease-in 250ms',
        opacity: currentPage === id ? 1 : 0,
        transform: currentPage === id ? 'translateY(0)' : `translateY(${pos}%)`,
      }} 
      onWheel={currentPage === id ? handleScroll : undefined}
      onTouchStart={currentPage === id ? handleDragEnter : undefined}
      onTouchEnd={currentPage === id ? handleDragEnd : undefined}
    >
      {
        visited || currentPage === id ?
        children :
        null  
      }
    </div>
  );
};

export default Home;