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
      <div className='h-full overflow-hidden'>
        <div className='w-full h-full flex flex-row items-stretch overflow-hidden justify-between pt-8'>
          <div
            className='w-full overflow-auto pr-4 pl-8 pb-4'
          >
            <div className='max-w-3xl m-auto'>
              <Trans i18nKey='aboutme.myinfo' t={t}>
                Hi...
                <ul className='list-disc pl-8'>
                  {LANGUAGES.map((el) => <li key={`language-${el}`}>{t(`aboutme.langlist.${el}`)}</li>)}
                </ul>
                ...
              </Trans>
            </div>
          </div>
          <div className='hidden md:block md:flex-initial'>
                <img alt={t('aboutme.picturealt')} className='hidden md:block h-full w-auto pl-4 pr-8 object-cover' src='/images/personal_photo.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
