import {Trans, useTranslation} from 'react-i18next';
import {useEffect, useRef} from 'react';
import {PageComponent} from '../components/PageComponent';
import PageContent from '../components/PageContent';
import {Blob, blobPath} from '../components/Blob';
import GitHubLogo from '../components/icons/GitHubLogo';

interface Link {
  href: string;
  label: string;
  icon: JSX.Element;
}

const myLinks: Link[] = [
  {
    href: 'https://github.com/Ratsch0k',
    label: 'links.github',
    icon: <GitHubLogo />,
  }
]

const AboutMe: PageComponent = ({setScrollable}) => {
  const {t} = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);

  /*
   * Check size of content and set borders of header / footer appropriately
   */
  useEffect(() => {
    if (contentRef.current !== null) {
      const windowHeight = window.innerHeight;
      const componentHeight = contentRef.current?.scrollHeight;

      if (componentHeight && componentHeight + 80 > windowHeight) {
        setScrollable(true);
      } else {
        setScrollable(false);
      }
    }

    return () => {
      setScrollable(false);
    }
  }, [contentRef.current]);

  return (
      <PageContent contentClassname='w-full h-full' id='about-me-page'>
        <div
          className='w-full overflow-auto mt-[-24px] grid content-center justify-center'
          ref={(ref) => contentRef.current = ref}
        >
        <div className='flex flex-col lg:space-x-10 lg:flex-row items-center lg:justify-center overflow-visible mb-8'>
            <div
              className='w-full h-full pt-[24px] p-2 min-w-[200px] max-w-xl overflow-hidden'
            >
              <div
                className='h-full'
                style={{
                  display: 'grid',
                  gridTemplate: '1fr',
                }}
              >
                <div
                  className='h-full w-full text-primary grid content-center'
                  style={{
                    gridArea: '1/1',
                  }}
                >
                  <div
                    className='w-full'
                    style={{
                      display: 'grid',
                    }}
                  >
                    <div
                      className='transition-colors text-primary dark:text-primary-light'
                      style={{gridArea: '1 / 1', transform: 'translate(-8px, -8px)'}}
                    >
                      <Blob/>
                    </div>
                  <div className='transition-colors text-primary-light dark:text-primary'
                    style={{gridArea: '1 / 1', transform: 'translate(8px, 8px)'}}>
                    <Blob/>
                  </div>
                  </div>
                </div>
                <div className='grid justify-items-center content-center h-full w-full' style={{gridArea: '1 / 1', transform: 'translateX(0px)'}}>
                  <svg width={0} height={0}>
                    <defs>
                      <clipPath id='blobClip' clipPathUnits='objectBoundingBox'>
                        <path d={blobPath}/>
                      </clipPath>
                    </defs>
                  </svg>
                  <img style={{aspectRatio: '1 / 1', clipPath: 'url(#blobClip)'}} alt={t('aboutme.picturealt')} className='w-[90%] object-cover'  src='/images/personal_photo.jpg' />
                </div>
              </div>

            </div>
            <div className='max-w-2xl px-2 lg:max-w-lg sm:text-xl md:mt-0 mt-4 '>
              <Trans i18nKey='aboutme.myinfo' t={t}/>
            </div>
          </div>
          <div className='grid justify-center text-lg mb-32'>
            {
              myLinks.map(({href, label, icon}) =>
                <a href={href} target='_blank' referrerPolicy='no-referrer' key={`link-${label}`} rel="noreferrer">
                  <div className='flex flex-row space-x-1 justify-between hover:underline p-2 rounded-xl transition-colors dark:bg-primary-lightest dark:text-background-dark'>
                    {icon}
                    <div className='font-bold'>
                      {t(label)}
                    </div>
                  </div>
                </a>
              )
            }
          </div>
        </div>
      </PageContent>
  );
};

export default AboutMe;
