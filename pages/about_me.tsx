import { Trans, useTranslation } from 'react-i18next';
import PageTitle from '../components/page-title';

const LANGUAGES = [
  'javascript',
  'python',
  'c++',
  'java',
  'rust',
  'brainfuck',
  'bash',
]

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className='h-full overflow-hidden flex flex-col'>
      <PageTitle>
        {t('aboutme.title')}
      </PageTitle>
      <div className='h-full overflow-auto mt-4 max-w-4xl mx-auto'>
        <div
            className='w-full overflow-auto pl-8 pr-8 pb-4'
          >
            <div className='h-96 md:h-60 md:float-left md:mb-2 md:mr-2'>
              <img alt={t('aboutme.picturealt')} className='h-full w-auto object-cover' src='/images/personal_photo.jpg' />
            </div>
            <div className='max-w-3xl m-auto md:mt-0 mt-4'>
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
