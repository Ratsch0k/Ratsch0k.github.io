import {Trans, useTranslation} from 'react-i18next';
import PageTitle from '../components/page-title';
import {useEffect, useRef, useState} from 'react';
import {PageComponent} from '../components/Page';

const LANGUAGES = [
  'javascript',
  'python',
  'c++',
  'java',
  'rust',
  'brainfuck',
  'bash',
]

const AboutMe: PageComponent = ({setScrollable}) => {
  const {t} = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [border, setBorder] = useState<boolean>(false);

  useEffect(() => {
    if (contentRef.current !== null) {
      const windowHeight = window.innerHeight;
      const componentHeight = contentRef.current?.scrollHeight;

      console.log(`window: ${windowHeight} | component: ${componentHeight}`)

      if (componentHeight && componentHeight > windowHeight) {
        setScrollable(true);
        setBorder(true);
      }
    }

    return () => {
      setScrollable(false);
    }
  }, [contentRef.current]);

  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <PageTitle border={border}>
        {t('aboutme.title')}
      </PageTitle>
      <div className='h-full overflow-auto max-w-4xl pt-20 md:pt-24 mx-auto scrollbar'
      >
        <div
            className='w-full overflow-auto pl-8 pr-8 pb-4'
            ref={(ref) => contentRef.current = ref}
          >
            <div className='h-96 md:h-60 md:float-left md:mb-2 md:mr-2'>
              <img alt={t('aboutme.picturealt')} className='h-full w-auto object-cover' src='/images/personal_photo.jpg' />
            </div>
            <div className='max-w-3xl m-auto md:mt-0 mt-4 mb-16'>
              <Trans i18nKey='aboutme.myinfo' t={t}>
                Hi...
                <ul className='list-disc pl-8'>
                  {LANGUAGES.map((el) => <li key={`language-${el}`}>{t(`aboutme.langlist.${el}`)}</li>)}
                </ul>
                ...
              </Trans>
            </div>
          </div>
      </div>
    </div>
  );
};

export default AboutMe;
