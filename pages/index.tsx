import {useRouter} from 'next/dist/client/router';
import {TouchEventHandler, useCallback, useEffect, useRef, useState, WheelEventHandler} from 'react';
import {useTranslation} from 'react-i18next';
import LanguageSwitch from '../components/LanguageSwitch';
import PageIndicator from '../components/PageIndicator';
import AboutMe from './about_me';
import Intro from './intro';
import Projects from './projects';
import tailwindConfig from '../components/TailwindConfig';
import IndicateSwipeMotion from '../components/IndicateSwipeMotion';
import Skills from './skills';
import convert from 'color-convert';
import {PageComponent} from '../components/PageComponent';
import Legal from './legal';
import Page from '../components/Page';

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
    component: Skills,
    path: '/skills',
    titleKey: 'skills.pageTitle',
  },
  {
    component: Projects,
    path: '/projects',
    titleKey: 'projects.pageTitle',
  },
  {
    component: Legal,
    path: '/legal',
    titleKey: 'legal.pageTitle',
  }
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
      transId = setTimeout(() => {
        inTransition.current = false
      }, 0);
      setPages((prev) => {
        return Array.from(prev);
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
        className='absolute right-4 z-30 bottom-2 text-primary-dark'
      >
        <LanguageSwitch/>
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
            <div className='flex flex-col items-center px-2'>
              {
                (!hasNavigated && window.innerWidth <= Number.parseInt(tailwindConfig.theme.screens.lg, 10)) &&
                  <IndicateSwipeMotion/>
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

export default Home;