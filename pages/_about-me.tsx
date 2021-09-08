import { Trans, useTranslation } from 'react-i18next';

function Block() {
  return (
    <div
      className='bg-white inline-block h-full ml-2 mr-2 align-middle'
      style={{
        width: '15%',
        height: '0.25rem'
      }}
    ></div>
  )
}

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
      <div className='text-4xl w-full text-center md:text-6xl pt-4'>
        <Block />
        <span>{t('aboutme.title')}</span>
        <Block />
      </div>
      <div className='h-full overflow-y-auto overflow-x-hidden'>
        <div className='w-full flex flex-row items-stretch overflow-visible justify-between p-8'>
          <div
            className='w-full overflow-visible'
          >
            <Trans i18nKey='aboutme.myinfo' t={t}>
              Hi...
              <ul i18nIsDynamicList className='list-disc pl-8'>
                {LANGUAGES.map((el) => <li>{t(`aboutme.langlist.${el}`)}</li>)}
              </ul>
              ...
            </Trans>
          </div>
          <div className='hidden md:block md:flex-initial'>
                <img alt={t('aboutme.picturealt')} className='hidden md:block h-full w-auto pl-4 object-cover' src='/images/personal_photo.jpg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
