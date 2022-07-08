import {useTranslation} from 'react-i18next';

const SIZE = 24;

const IndicateSwipeMotion = () => {
  const {t} = useTranslation();

  return (
    <div className='flex justify-center'>
      <div className='flex flex-col items-center'>
        <svg className='animate-swipe-left opacity-0' width={SIZE} height={SIZE}>
          <circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2} fill='white'/>
        </svg>
        {t('misc.swipe')}
      </div>
    </div>
  );
};

export default IndicateSwipeMotion;