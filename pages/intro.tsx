import styles from '../styles/Home.module.css'
import { useTranslation } from 'react-i18next';


const Intro = () => {
  const {t} = useTranslation();
  return (
    <div className='flex h-full justify-center items-center'>
      <div>
        <div className={`sm:text-6xl text-4xl text-center ${styles.appear}`}>
          Simon Kurz
        </div>
        <div className={`md:text-sm text-xs text-secondary md:transform md:translate-x-40 ${styles.appear} ${styles['appear-subtitle']}`}>
          {t('intro.info')} 
        </div>
        <div
          className={`sm:text-6xl sm:mt-4 text-4xl text-center ${styles.appear}`}
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
  )
}

export default Intro