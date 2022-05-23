import styles from '../styles/Home.module.css'
import {useTranslation} from 'react-i18next';
import {useCallback, useRef, useState, useEffect} from 'react';
import Logo from '../components/icons/Logo';
import Modal from '../components/Modal';
import CircuitBoardIcon from '../components/icons/CircuitBoardIcon';
import {PageComponent} from '../components/PageComponent';
import TailwindConfig from '../components/TailwindConfig';
import useTheme from '../components/hooks/useTheme';

const primaryContrast = TailwindConfig.theme.colors.primary.contrast;
const primary = TailwindConfig.theme.colors.primary.DEFAULT;

const Intro: PageComponent = ({setScrollable, firstPage}) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState<boolean>(firstPage);
  const hoverRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hintClick, setHintClick] = useState<boolean>(false);
  const animHover = useRef<Animation | null>(null);
  const {theme} = useTheme();

  useEffect(() => {
    setScrollable(false);
  }, []);

  useEffect(() => {
    if (hoverRef.current) {
      animHover.current = hoverRef.current.animate(
        [
          {
            transform: 'scale(1.0)'
          },
          {
            transform: 'scale(1.1)',
          },
          {
            transform: 'scale(1.0)',
          }
        ],
        {
          iterations: Infinity,
          duration: 4000,
        }
      );
    }
  }, []);

  // After 2 seconds. Hint that the user can click
  useEffect(() => {
    const id = setTimeout(() => {
      if (!mouseDown && !clicked) {
        setHintClick(true);
      }
    }, 2000);

    return () => {
      clearTimeout(id);
    }
  }, [mouseDown, clicked]);

  const handleMouseDown = useCallback(() => {
    if (animHover.current) {
      animHover.current.pause();
    }
    setMouseDown(true);
  }, []);

  const handleSkip = useCallback((event) => {
    setOpen(false);
    event.stopPropagation();
  }, [])

  const handleMouseUp = useCallback(() => {
    setMouseDown(false);
    setClicked(true);
    setTimeout(() => {
      setOpen(false);
    }, 2000);
  }, []);

  return (
    <>
      <Modal open={open}>
      <div
        className={
          `absolute inset-0 bg-background-light dark:bg-background-dark flex justify-center items-center z-40 text-primary-dark dark:text-primary-contrast transition-opacity ${clicked && 'opacity-0 animate-ball-shrink'}`
        }
        style={{
          transitionDelay: '1.2s',
          transitionDuration: '0.8s',
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchEnd={handleMouseUp}
      >
        <div className={`transition-all duration-250 transform ${mouseDown ? 'scale-90' : 'scale-1'}`}>
          <div
            key='logo-div'
            className='w-[20vw] h-[20vh]'
            ref={hoverRef}
          >
            <Logo style={{width: '20vw', height: '20vh'}} />
          </div>
        </div>
          <div
            className={`absolute h-full flex items-end text-center font-bold text-xs md:text-lg lg:text-xl transition-opacity duration-500 opacity-0 ${hintClick && 'opacity-100'}`}
            style={{
              height: 'min(30vh, 30vw)',
            }}
          >
            {t('intro.hintClick')}
          </div>
        <div className='h-full w-full absolute flex justify-center items-center'>
          {
            clicked &&
            <CircuitBoardIcon className='h-full w-full' />
          }
        </div>
        <button
          className='absolute p-4 pb-0 right-8 bottom-8 text-xs border-b-2 md:text-xl xl:text-2xl transition-all hover:border-b-8 border-primary-dark dark:border-primary-contrast disabled:opacity-0'
          onClick={handleSkip}
          onMouseUp={handleSkip}
          onMouseDown={handleSkip}
          onTouchStart={handleSkip}
          onTouchEnd={handleSkip}
          disabled={clicked}
        >
          {t('intro.skip')}
        </button>
      </div>
    </Modal>
      <div className='flex h-full justify-center items-center'>
        <div>
          <div className={`sm:text-6xl text-4xl text-center text-primary dark:text-primary-contrast transition-colors ${clicked ? styles['appear']: !open ? styles['appear-now'] : ''}`}>
            Simon Kurz
          </div>
          <div className={`md:text-sm text-xs text-secondary-dark dark:text-secondary transition-colors md:transform md:translate-x-40 ${clicked ? styles['appear'] : !open ? styles['appear-now'] : ''} ${clicked ? styles['appear-subtitle'] : !open ? styles['appear-subtitle-now'] : ''}`}>
            {t('intro.info')}
          </div>
          {
            /*
             * This is a weird hack to avoid styling bugs when transitioning the color within the background property.
             * It would be cleaner to change the first color step in the background linear gradient but for some
             * reason this breaks the background clip property and the text has no gradient. Instead, just
             * the background is a linear gradient. To avoid this, I separated both types into different
             * components, changes the color and transition between them by changing their opacity.
             * Funnily enough, opacity only affects those elements when the opacity of a parent element is changed.
             * Changing the opacity of a gradient text element doesn't seem to do anything.
             */
          }
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr'
            }}
          >
          <div className={'transition-opacity ' + theme === 'dark' ? 'opacity-0' : 'opacity-1'} style={{gridArea: '1 / 1'}}>
            <div
              className={`sm:text-6xl sm:mt-4 text-4xl text-center transition-colors ${clicked ? styles['appear'] : !open ? styles['appear-now'] : ''}`}
              style={{
                transform: 'scaleY(-1)',
                background: `linear-gradient(0deg, ${primaryContrast} 0%, rgba(0,0,0,0) 60%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Simon Kurz
            </div>
          </div>
          <div className={'transition-opacity ' + theme === 'dark' ? 'opacity-0' : 'opacity-1'} style={{gridArea: '1 / 1'}}>
            <div
              className={`sm:text-6xl sm:mt-4 text-4xl text-center transition-colors ${clicked ? styles['appear'] : !open ? styles['appear-now'] : ''}`}
              style={{
                transform: 'scaleY(-1)',
                background: `linear-gradient(0deg, ${primary} 0%, rgba(0,0,0,0) 60%)`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Simon Kurz
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Intro