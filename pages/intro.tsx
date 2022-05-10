import styles from '../styles/Home.module.css'
import {useTranslation} from 'react-i18next';
import {useCallback, useRef, useState, useEffect} from 'react';
import Logo from '../components/icons/Logo';
import Modal from '../components/Modal';
import CircuitBoardIcon from '../components/icons/CircuitBoardIcon';
import {PageComponent} from '../components/PageComponent';

const Intro: PageComponent = ({setScrollable, firstPage}) => {
  const {t} = useTranslation();
  const [open, setOpen] = useState<boolean>(firstPage);
  const hoverRef = useRef<HTMLDivElement>(null);
  const [mouseDown, setMouseDown] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);
  const [hintClick, setHintClick] = useState<boolean>(false);
  const animHover = useRef<Animation | null>(null);

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
          `absolute inset-0 bg-primary-dark flex justify-center items-center z-40 text-white transition-opacity ${clicked && 'opacity-0 animate-ball-shrink'}`
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
        <div className='h-full w-full absolute flex justify-center items-center text-white'>
          {
            clicked &&
            <CircuitBoardIcon className='h-full w-full' />
          }
        </div>
        <button
          className='absolute p-4 pb-0 right-8 bottom-8 text-xs border-b-2 md:text-xl xl:text-2xl transition-all hover:border-b-8 disabled:opacity-0'
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
          <div className={`sm:text-6xl text-4xl text-center ${clicked ? styles['appear']: !open ? styles['appear-now'] : ''}`}>
            Simon Kurz
          </div>
          <div className={`md:text-sm text-xs text-secondary md:transform md:translate-x-40 ${clicked ? styles['appear'] : !open ? styles['appear-now'] : ''} ${clicked ? styles['appear-subtitle'] : !open ? styles['appear-subtitle-now'] : ''}`}>
            {t('intro.info')}
          </div>
          <div
            className={`sm:text-6xl sm:mt-4 text-4xl text-center ${clicked ? styles['appear'] : !open ? styles['appear-now'] : ''}`}
            style={{
              transform: 'scaleY(-1)',
              background: 'linear-gradient(0deg, rgba(255,255,255,0.32) 0%, rgba(0,0,0,0) 60%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Simon Kurz
          </div>
        </div>
      </div>
    </>
  )
}

export default Intro