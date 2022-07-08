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
import PageTitle from '../components/PageTitle';
import {isFirefox} from 'react-device-detect';
import CV from './cv';
import Logo from '../components/icons/Logo';
import ThemeSwitch from '../components/ThemeSwitch';
import useTheme from '../components/hooks/useTheme';
import Head from 'next/head';

const darkBackground = convert.hex.rgb('#13152c');
const lightBackground = convert.hex.rgb('#e3e3ff');

interface PageInfo {
  component: PageComponent,
  path: string;
  titleKey: string;
  disableTitle?: boolean;
}

const initialState: PageInfo[] = [
  {
    component: Intro,
    path: '/',
    titleKey: 'intro.title',
    disableTitle: false,
  },
  {
    component: AboutMe,
    path: '/about-me',
    titleKey: 'aboutme.title',
  },
  {
    component: Skills,
    path: '/skills',
    titleKey: 'skills.title',
  },
  {
    component: Projects,
    path: '/projects',
    titleKey: 'projects.title',
  },
  {
    component: CV,
    path: '/cv',
    titleKey: 'cv.title',
  },
  {
    component: Legal,
    path: '/legal',
    titleKey: 'legal.title',
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
  const {theme} = useTheme();

  const getPageIndex = useCallback((path: string) => {
    for (let i = 1; i < pages.length; i++) {
      if (path.startsWith(pages[i].path)) {
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
      router.push(nextPage.path);

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
      <Head>
        <title>Simon Kurz - {t(pages[currentPage].titleKey)}</title>
      </Head>
      <div id='modal-root'/>

      <div
        className='absolute bottom-0 z-20 w-full pr-3 sm:pr-0 transition-colors'
      >
        {
          (!hasNavigated && window.innerWidth <= Number.parseInt(tailwindConfig.theme.screens.lg, 10)) &&
            <IndicateSwipeMotion/>
        }
        <div className={`px-2 sm:px-4 py-4 flex justify-center flex items-end transition-colors justify-between border-background-light dark:border-background-dark ${scrollable && 'border-t'}`}
             style={{
               backdropFilter: 'blur(8px)',
               backgroundColor: theme === 'dark' ?
                 `rgba(${darkBackground[0]}, ${darkBackground[1]}, ${darkBackground[2]}, ${isFirefox ? 1 :  0.5})` :
                 `rgba(${lightBackground[0]}, ${lightBackground[1]}, ${lightBackground[2]}, ${isFirefox ? 1 : 0.1}`,
             }}
        >
          <div className='h-10 w-10 text-primary dark:text-primary-contrast transition-colors'>
            <Logo strokeWidth={40}/>
          </div>
          <div className='px-2'>
            <PageIndicator len={pages.length} page={currentPage} changePage={(id) => toPage(id)}/>
          </div>
          <div className='flex space-x-1'>
            <ThemeSwitch />
            <LanguageSwitch/>
          </div>

        </div>
      </div>
      {
        pages[currentPage].titleKey &&
        <PageTitle
            border={scrollable}
            currentTitle={currentPage}
            disabled={pages[currentPage].disableTitle}
            titles={pages.map((p) => t(p.titleKey))}
            onTitleClick={(id) => toPage(id)}
        />
      }

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