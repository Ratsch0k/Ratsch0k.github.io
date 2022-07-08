import historyData from './HistoryData';
import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import CVItem from './CVItem';
import {useTranslation} from 'react-i18next';
import Button from '../Button';
import useTheme from '../hooks/useTheme';

/**
 * Creates an svg path for an array, given its length.
 * @param N Length of the array
 * @param width Width of the wrapping component
 * @param lineLength Vertical length of a line segment
 * @param elongateEnd If true, the last line of the path will not be cut but instead will be longer
 */
export const pathForArray = (N: number, width = 200, lineLength = 400, elongateEnd = false): string => {
  /*
   * Make sure N is higher 0
   */
  if (N == 0) {
    return '';
  }

  // Offset for creating curves
  const offset = Math.min(width, lineLength) / 4;
  // Offset to the edges, makes sure that lines will not be cut
  const edgeOffset = 2;

  // Path. Starts with the first vertical line
  let path = 'M' + edgeOffset + ' ' + edgeOffset  + ' V' + (lineLength - 2 * offset);


  // Iterates N - 1 times and always creates one horizontal and one vertical segment
  for (let i = 0; i < N - 1; i++) {
    /*
     * Each path consists of 4 parts.
     *
     * 1. The first curve. Connect the last vertical and the next horizontal segment
     * 2. Horizontal segment
     * 3. Curve connecting the horizontal and vertical segment
     * 4. Vertical line
     *
     * The straight lines only need one value. The curves require setting 4 values each.
     *
     * Calculation is relatively inefficient but because it should only happen on the first site load, or
     * when the user resizes the wrapper component, it suffices for now.
     */

    let horizontal;
    let vertical = (i + 2) * lineLength - 2 * offset;

    if (i === N - 2) {
      if (elongateEnd) {
        vertical = (i + 2) * lineLength;
      } else {
        vertical = (i + 1) * lineLength + lineLength / 2;
      }
    } else {
      vertical = (i + 2) * lineLength - 2 * offset;
    }

    let firstAnchor = '';
    let firstCurveTo = '';
    let secondAnchor = '';
    let secondCurveTo = '';

    if (i % 2 == 0) {
      horizontal = width - edgeOffset - 2 * offset;
      firstAnchor += edgeOffset;
      firstCurveTo += edgeOffset + 2 * offset;
      secondAnchor += width - edgeOffset;
      secondCurveTo += width - edgeOffset;
    } else {
      horizontal = edgeOffset + 2 * offset;
      firstAnchor += width - edgeOffset;
      firstCurveTo += width - edgeOffset - 2 * offset;
      secondAnchor += edgeOffset;
      secondCurveTo += edgeOffset;
    }

    firstAnchor += ' ' + ((i + 1) * lineLength).toString();
    firstCurveTo += ' ' + ((i + 1) * lineLength).toString();
    secondAnchor += ' ' + ((i + 1) * lineLength).toString();
    secondCurveTo += ' ' + ((i + 1) * lineLength + 2 * offset);


    // Append new segments to the path
    path += ' Q' + firstAnchor + ' ' + firstCurveTo + ' H' + horizontal + ' Q' + secondAnchor + ' ' + secondCurveTo + ' V' + vertical;
  }

  return path
}


export interface HistoryProps {
  lineHeight: number;
  lineWidth: number;
  indicatorSize: number;
}

export const History = (props: HistoryProps) => {
  const {lineHeight, lineWidth, indicatorSize} = props;

  // Reference to the root component
  const ref = useRef<HTMLDivElement | null>(null);

  // Reference to the animated history line
  const pathRef = useRef<SVGPathElement | null>(null);

  // Reference to the wrapper component of the history lines
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // Width of the wrapper component
  const [width, setWidth] = useState<number>(400);

  // Path for the animated history line
  const path = useMemo(() => pathForArray(historyData.length, width, lineHeight), [width, lineHeight, historyData]);

  // Path for the dotted background history line
  const longPath = useMemo(() => pathForArray(historyData.length, width, lineHeight, true), [width, lineHeight, historyData]);

  // Percentage the user scrolled of the entire page
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const [disableScroll, setDisableScroll] = useState<boolean>(false);

  useEffect(() => {
    const scroll = parseInt(window.sessionStorage.getItem('cv-page') || '', 10);

    if (!isNaN(scroll)) {
      ref.current?.scroll(0, scroll);
    }
  }, []);

  const {theme} = useTheme();
  const {t} = useTranslation();

  /*
   * Handles first render logic.
   *
   * Creates a ResizeObserver which keeps track of the size of the wrapper component
   *
   * Get initial scroll percentage
   */
  useEffect(() => {
    let observer: ResizeObserver;
    if (wrapperRef.current) {
      observer = new ResizeObserver((ev) => {
        const event = ev[0];

        setWidth(event.contentRect.width);
      });
      observer.observe(wrapperRef.current);
    }
    if (ref.current && !disableScroll) {
      setScrollPercentage(getScrollPercentageFromDiv(ref.current));
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    }
  }, []);

  /**
   * Gets the percentage the user scrolled the given element.
   */
  const getScrollPercentageFromDiv = useCallback((element: HTMLDivElement): number => {
    return element.scrollTop / (element.scrollHeight - element.clientHeight - lineHeight / 2);
  }, []);

  /**
   * Handles a scroll event.
   */
  const handleScroll = useCallback<React.UIEventHandler<HTMLDivElement>>((ev) => {
    const element = ev.target as HTMLDivElement;

    if (!disableScroll) {
      setScrollPercentage(getScrollPercentageFromDiv(element));
    }

    window.sessionStorage.setItem('cv-page', element.scrollTop.toString());
  }, [disableScroll]);

  const handleRevealAll = useCallback(() => {
    if (pathRef.current) {
      pathRef.current.style.transition = 'stroke-dashoffset 2s';
      getComputedStyle(pathRef.current);
    }

    setScrollPercentage(1);
    setDisableScroll(true);
  }, []);

  return (
    <div
      ref={ref}
      className={theme === 'dark' ? 'scrollbar-light' : 'scrollbar'}
      style={{
        height: '100vh',
        overflowY: 'auto',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
      onScroll={handleScroll}
    >
      <div
        ref={wrapperRef}
        className='max-w-2xl'
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          paddingTop: '7rem',
          paddingBottom: '7rem',
          margin: 'auto',
        }}
      >
      <svg
        width='100%' height={historyData.length * lineHeight}
        stroke='currentColor'
        strokeWidth={lineWidth - 1}
        strokeLinecap='round'
        fill='none'
        strokeDasharray='10 20'
        className='transition-colors text-primary-light dark:text-primary-lightest'
        style={{
          gridArea: '1 / 1',
        }}
      >
        <path
          d={longPath}
        />
      </svg>

      <svg
        width='100%' height={historyData.length * lineHeight}
        stroke='currentColor'
        strokeWidth={lineWidth}
        strokeLinecap='round'
        fill='none'
        strokeDasharray={pathRef.current?.getTotalLength()}
        className='transition-colors text-secondary dark:text-secondary'
        style={{
          gridArea: '1 / 1',
        }}
      >
        <path
          ref={pathRef}
          d={path}
          strokeDashoffset={
            pathRef.current ?
              pathRef.current.getTotalLength() - lineHeight / 2 - (pathRef.current?.getTotalLength() - lineHeight / 2) * scrollPercentage :
              0
          }
        />
      </svg>


      <div style={{gridArea: '1 / 1', width: '100%'}}>
        {
          historyData.map((event, index) => {
            const isVisible = scrollPercentage >= index / (historyData.length - 1)

            return (
              <div
                style={{
                  height: lineHeight,
                }}
                key={`event-${event.title}`}
              >
                <CVItem
                  event={event}
                  isVisible={isVisible || disableScroll}
                  index={index}
                  lineWidth={lineWidth}
                  indicatorSize={indicatorSize}
                />
              </div>
            );
          })
        }
      </div>
        <div style={{gridArea: '1 / 1', display: 'grid', justifyContent: 'end', alignItems: 'start', height: 'fit-content'}}>
          <Button
            className={'rounded-lg ' + (disableScroll ? 'opacity-0 cursor-default' : '')}
            disabled={disableScroll}
            onClick={handleRevealAll}
          >
            {t('cv.revealAll')}
          </Button>
        </div>
      </div>
    </div>
  );
};

History.defaultProps = {
  lineHeight: 500,
  lineWidth: 4,
  indicatorSize: 24,
}

export default History;