import { useRouter } from 'next/dist/client/router'
import { TouchEventHandler, useCallback, useEffect, useRef, useState, WheelEventHandler } from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSwitch from '../components/language-switch'
import PageIndicator from '../components/page-indicator'
import AboutMe from './_about-me'
import Intro from './_intro'
import Projects from './_projects'

interface Page {
  component: () => JSX.Element,
  path: string;
  titleKey: string;
  visited: boolean;
}

const initialState: Page[] = [
  {
    component: Intro,
    path: '/',
    titleKey: 'intro.pageTitle',
    visited: false,
  },
  {
    component: AboutMe,
    path: '/about-me',
    titleKey: 'aboutme.pageTitle',
    visited: false,
  },
  {
    component: Projects,
    path: '/projects',
    titleKey: 'projects.pageTitle',
    visited: false,
  },
];

const Home = () => {
  const { t } = useTranslation();
  const [initialPos, setInitialPos] = useState<{x: Number, y: number}>();
  const router = useRouter();
  const [pages, setPages] = useState<Page[]>(initialState); 

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
        arr[currentPage].visited = true;
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
          const Page = page.component;
          const current = currentPage;

          // Determine how the animation should look
          let pos = 0;

          if (current === index) {
            pos = 0;
          } else {
            if (index > current) {
              pos = 100;
            } else {
              pos = -100;
            }
          }

          return (
            <div
              key={`page-${index}`}
              className='absolute h-full w-full overflow-hidden'
              style={{
                transition: 'transform ease-out 500ms, opacity ease-in 250ms',
                opacity: current === index ? 1 : 0,
                transform: current === index ? 'translateY(0)' : `translateY(${pos}%)`,
              }} 
              onWheel={current === index ? handleScroll : undefined}
              onTouchStart={current === index ? handleDragEnter : undefined}
              onTouchEnd={current === index ? handleDragEnd : undefined}
            >
              <Page />
            </div>
          );
        })
      }
    </div>
    </>
  )
}

export default Home;