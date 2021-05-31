import { useRouter } from 'next/dist/client/router'
import { useCallback, useEffect, useState } from 'react'
import AboutMe from './_about-me'
import Intro from './_intro'

export default function Home() {
  const [page, setPage] = useState<string>('/')
  const [initialPos, setInitialPos] = useState<{x: Number, y: number}>();

  const navigate = useCallback((path: string, title: string) => {
    setPage(path)
    window.history.pushState(path, title, path)
  }, [page, setPage])

  const handleScroll = useCallback((event: WheelEvent) => {
    if (event.deltaY < 0) {
      setPage('/')
    } else if (event.deltaY > 0) {
      setPage('/about-me')
    }
  }, [setPage])

  const handleDragEnter = useCallback((event: TouchEvent) => {
    if (event.touches && event.touches.length === 1) {
      const touch = event.touches.item(0);
      if (touch !== null) {
        setInitialPos({x: touch.screenX, y: touch.screenY});
      }
    }
  }, [setInitialPos])

  const handleDragEnd = useCallback((event: TouchEvent) => {
    if (initialPos !== undefined && event.changedTouches && event.changedTouches.length === 1) {
      const touch = event.changedTouches.item(0);
      if (touch !== null) {
        if (initialPos.y - touch.screenY > 80) {
          setPage('/about-me')
        } else if (initialPos.y - touch.screenY < -80) {
          setPage('/')
        }
      }
    }
  }, [initialPos])

  useEffect(() => {
    window.removeEventListener('wheel', handleScroll)
    window.removeEventListener('touchstart', handleDragEnter)
    window.removeEventListener('touchend', handleDragEnd)
    window.addEventListener('wheel', handleScroll)
    window.addEventListener('touchstart', handleDragEnter)
    window.addEventListener('touchend', handleDragEnd)

    return () => {
      window.removeEventListener('wheel', handleScroll)
      window.removeEventListener('touchstart', handleDragEnter)
      window.removeEventListener('touchend', handleDragEnd)
    }
  }, [initialPos])

  return (
    <div className="overflow-auto">
      <div
        className='absolute h-full w-full overflow-hidden'
        style={{
          transition: 'transform ease-out 500ms, opacity ease-in 250ms',
          opacity: page === '/' ? 1 : 0,
          transform: page === '/' ? 'translateY(0)' : 'translateY(-100%)'
        }}
      >
        <Intro toAboutMe={() => navigate('/about-me', 'About Me')} />
      </div>
      <div
        className='absolute h-full w-full overflow-hidden'
        style={{
          transition: 'transform ease-out 500ms, opacity ease-in 250ms',
          opacity: page === '/about-me' ? 1 : 0,
          transform: page === '/about-me' ? 'translateY(0)' : 'translateY(100%)'
        }}
      >
        <AboutMe goBack={() => navigate('/', 'Portfolio')}/>
      </div>
    </div>
  )
}