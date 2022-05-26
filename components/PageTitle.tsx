import tailwindConfig from '../components/TailwindConfig';
import convert from 'color-convert';
import {FC, TouchEventHandler, useCallback, useEffect, useRef, useState} from 'react';
import {isFirefox} from 'react-device-detect';
import useTheme from './hooks/useTheme';

const darkBackground = convert.hex.rgb('#13152c');
const lightBackground = convert.hex.rgb('#ffffff');
const textSm = tailwindConfig.theme.fontSize.sm[0];
const text4xl = tailwindConfig.theme.fontSize['4xl'][0];
const firstSansFontFamily = tailwindConfig.theme.fontFamily.sans[0];

export interface PageTitleProps {
  border?: boolean;
  titles: string[];
  currentTitle: number;
  disabled?: boolean;
  onTitleClick(id: number): void;
}

const PageTitle: FC<PageTitleProps> = (props) => {
  const {border, titles, currentTitle: _currentTitle, disabled, onTitleClick} = props;
  const root = useRef<HTMLDivElement>(null);
  const [initialOffset, setInitialOffset] = useState<number>(0);
  const canvas = useRef<HTMLCanvasElement>(document.createElement('canvas'));
  const [currentTitle, setCurrentTitle] = useState<number>(_currentTitle);
  const [initialSwipePos, setInitialSwipePos] = useState<number | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<number | null>(null);
  const [lastPos, setLastPos] = useState<number | null>(null);
  const {theme} = useTheme();

  /**
   * Get the width of the given text in pixels.
   * @param text The text for which to calculate the width
   * @param type Either `normal` or `big`. Decides which font size is used
   * @returns Returns the width of the given text in pixels by using a canvas and using its `measureText` method.
   */
  const getTextWidth = useCallback((text: string, type: 'normal' | 'big') => {
    const ctx = canvas.current.getContext('2d');

    if (ctx !== null) {
      if (type === 'normal') {
        ctx.font = `700 ${textSm} ${firstSansFontFamily}`;
      } else {
        ctx.font = `700 ${text4xl} ${firstSansFontFamily}`;
      }

      return ctx.measureText(text).width;
    }
    return 0;
  }, []);

  /**
   * Calculates the offset of the titles based on the width of the current and other titles.
   *
   * The calculation assumes that the starting position of the element to offset is the left edge
   * of its parent element. It starts by getting the initial offset which would offset it to the middle
   * (element's left edge would be in the middle of its parent). Based on the currently selected title,
   * it will then sum the normal width of all titles before the selected one, plus the margin. This
   * positions the left edge of the current title in the middle. Lastly, it will add half of the big width
   * of the current title to position it exactly in the middle.
   */
  const calcOffset = useCallback((id: number) => {
    let offset = 0;
    for (let i = 0; i < id; i++) {
      offset += getTextWidth(titles[i], 'normal') + 24;
    }

    offset += getTextWidth(titles[id], 'big') / 2;

    return offset;
  }, [titles]);

  const [offset, setOffset] = useState<number>(calcOffset(_currentTitle));

  useEffect(() => {
    adjustInitialOffset();
  }, []);

  useEffect(() => {
    setCurrentTitle(_currentTitle);
  }, [_currentTitle]);

  const adjustInitialOffset = useCallback(() => {
    if (root.current !== null) {
      setInitialOffset(root.current.clientWidth / 2);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', adjustInitialOffset);

    return () => {
      window.removeEventListener('resize', adjustInitialOffset);
    }
  }, []);



  /**
   * Updates the offset using `calcOffset`
   */
  const updateOffset = useCallback(() => {
    const offset = calcOffset(currentTitle);

    if (offset !== null) {
      setOffset(offset);
    }
  }, [calcOffset, currentTitle]);



  const handleTouchMove: TouchEventHandler = useCallback((event) => {
    const touchPos = event.touches.item(0).clientX;

    if (initialSwipePos !== null && lastPos !== null) {
      const swipeDelta = (lastPos - touchPos);

      let nextPos: number;
      let max = 0;
      for (let i = 0; i < titles.length; i++) {
        max += getTextWidth(titles[i], i === currentTitle ? 'big' : 'normal') + 16;
      }
      max -= getTextWidth(titles[titles.length - 1], titles.length - 1 === currentTitle ? 'big' : 'normal') / 2;
      max -= 16;

      const potentialPos = offset + swipeDelta;
      const min = getTextWidth(titles[0], currentTitle === 0 ? 'big' : 'normal') / 2;
      if (potentialPos < min && swipeDelta < 0) {
        nextPos = offset + swipeDelta * Math.exp(0.03*(potentialPos - min));
      } else if (potentialPos >= max && swipeDelta > 0) {
        nextPos = offset + swipeDelta * Math.exp(0.03*(max - potentialPos));
      } else {
        nextPos = offset + swipeDelta;
      }

      let sum = 0;
      for (let i = 0; i < titles.length; i++) {
        const iTitleWidth = getTextWidth(titles[i], i === currentTitle ? 'big' : 'normal');

        if (sum - 8 < nextPos && nextPos < sum + iTitleWidth + 8) {
          setSelectedTitle(i);
          break;
        }

        sum += iTitleWidth + 16;
      }

      setLastPos(touchPos);
      setOffset(nextPos);
    } else {
      setInitialSwipePos(touchPos);
      setLastPos(touchPos);
      setSelectedTitle(null);
    }
  }, [initialSwipePos, titles, currentTitle, lastPos, offset]);

  const handleTouchEnd: TouchEventHandler = useCallback(() => {
    if(selectedTitle !== null) {
      onTitleClick(selectedTitle);
      setOffset(calcOffset(selectedTitle));
    }
    setInitialSwipePos(null);
    setSelectedTitle(null);
    setLastPos(0);
  }, [selectedTitle]);

  /**
   * Update the offset whenever the current title changes
   */
  useEffect(() => {
    updateOffset();
  }, [currentTitle]);


  return (
    <div
      className={`z-20 absolute top-0 sm:pr-0 pr-3 w-full h-[65px] overflow-y-visible overflow-x-hidden transition-opacity duration-500 ${disabled ? 'opacity-0' : 'opacity-1'}`}

    >
      <div className='absolute w-full h-[2px] bottom-[1px] z-20'>
        <div className='mx-auto border-b-2 h-[2px] border-primary dark:border-primary-contrast overflow-y-visible'
             style={{
               width: getTextWidth(titles[currentTitle], 'big'),
               transition: 'width 300ms, border-color 150ms',
               transform: 'translateY(1px)',
             }}
        />
      </div>
      <div
        className={`relative h-[65px] transition-colors text-4xl w-full text-center md:text-6xl border-b ${!border && 'border-transparent'} border-gray-300 dark:border-background-dark`}
       style={{
          backdropFilter: 'blur(8px)',
          overflowX: 'hidden',
          overflowY: 'visible',
          backgroundColor: theme === 'dark' ?
            `rgba(${darkBackground[0]}, ${darkBackground[1]}, ${darkBackground[2]}, ${isFirefox ? 1.0 : 0.5})` :
            `rgba(${lightBackground[0]}, ${lightBackground[1]}, ${lightBackground[2]}, ${isFirefox ? 1.0 : 0.1})`,
        }}
        ref={root}
      >

        <div
          className='absolute h-[3rem] mt-1 w-full'
          style={{
            left: initialOffset,
          }}
        >
          <div
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className='text-base transition-colors text-primary dark:text-primary-lightest flex items-center h-[3rem] space-x-4'
              style={{
                transition: initialSwipePos === null ? 'transform 300ms' : undefined,
                transform: `translateX(${-offset}px)`,
              }}
            >
              {
                titles.map((title, index) => {
                  const isCurrentTitle = index === currentTitle;

                  return (
                    <div
                      className={
                        'cursor-pointer font-bold transition-colors' + (isCurrentTitle ? 'text-primary dark:text-primary-contrast text-4xl ' : 'text-sm ' + (index === selectedTitle ? 'text-primary dark:text-primary-contrast' : 'text-primary-dark dark:text-primary-light'
                        ))
                      }
                      onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        onTitleClick(index);
                      }}
                      onTouchStart={handleTouchMove}
                      onTouchEnd={handleTouchEnd}
                      key={`title-${index}`}
                      style={{
                        whiteSpace: 'pre',
                        transition: 'font-size, color',
                        transitionDuration: '300ms, 250ms',
                      }}
                    >
                      {title}
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PageTitle;