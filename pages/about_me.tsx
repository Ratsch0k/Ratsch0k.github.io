import {Trans, useTranslation} from 'react-i18next';
import PageTitle from '../components/PageTitle';
import {useEffect, useRef, useState} from 'react';
import {PageComponent} from '../components/PageComponent';
import PageContent from '../components/PageContent';

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

  /*
   * Check size of content and set borders of header / footer appropriately
   */
  useEffect(() => {
    if (contentRef.current !== null) {
      const windowHeight = window.innerHeight;
      const componentHeight = contentRef.current?.scrollHeight;

      if (componentHeight && componentHeight + 80 > windowHeight) {
        setScrollable(true);
        setBorder(true);
      } else {
        setScrollable(false);
        setBorder(false);
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
      <PageContent>
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
      </PageContent>
    </div>
  );
};

export default AboutMe;
