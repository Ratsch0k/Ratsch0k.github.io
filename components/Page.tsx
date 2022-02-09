import {ReactNode, TouchEventHandler, useEffect, useState, WheelEventHandler} from 'react';
import {NextPage} from 'next';

export interface PageProps {
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
      className={`absolute w-full overflow-hidden h-full ${currentPage === id ? 'z-10' : 'z-0'}`}
    >
      <div
        key={`page-${id}`}
        className='h-full w-full overflow-y-auto overflow-x-hidden'
        style={{
          transition: 'transform cubic-bezier(0.65, 0, 0.35, 1) 500ms, opacity linear 250ms',
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

export default Page;