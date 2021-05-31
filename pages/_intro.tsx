import styles from '../styles/Home.module.css'


function Intro() {
  return (
    <div className='flex h-full justify-center items-center'>
      <div>
        <div className={`sm:text-6xl text-4xl text-center ${styles.appear}`}>
          Simon Kurz
        </div>
        <div className={`sm:text-sm text-xs text-secondary sm:transform sm:translate-x-40 ${styles.appear} ${styles['appear-subtitle']}`}>
          Student, Developer, Future IT-Security expert
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