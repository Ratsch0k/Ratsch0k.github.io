import {HistoryEvent} from './HistoryData';
import {useMemo} from 'react';
import TailwindConfig from '../TailwindConfig';
import {Trans, useTranslation} from 'react-i18next';

/**
 * Visualizes the data of one event
 * @param event The event
 */
export const EventContent = ({event}: {event: HistoryEvent}) => {
  const {i18n: {language}, t} = useTranslation();

  return (
    <div className='border text-primary-contrast rounded-3xl border-primary-light bg-primary p-4 sm:p-8 pt-4'>
      <div className='font-bold text-2xl pb-2 text-primary-lightest text-center'>
        <Trans i18nKey={event.title} />
      </div>
      <div className='font-bold text-lg text-center'>
        <Trans i18nKey={event.type} />
      </div>
      <div className='font-bold text-lg text-center pb-8'>
        {event.from.toLocaleDateString(language, {month: 'long', year: 'numeric'})} - {event.to?.toLocaleDateString(language, {month: 'long', year: 'numeric'}) || t('cv.noDate')}
      </div>
      <div>
        <Trans i18nKey={event.description} />
      </div>
    </div>
  );
};

export interface HistoryEventProps {
  event: HistoryEvent;
  isVisible: boolean;
  index: number;
  lineWidth: number;
  indicatorSize: number;
}

/**
 * Visualizes a history event for the timeline.
 * @param props Props
 */
export const CVItem = (props: HistoryEventProps) => {
  const {event, isVisible, index, lineWidth, indicatorSize} = props;

  /*
   * Stores if the index of this component is even
   */
  const evenElement = useMemo(() => index % 2 === 0, [index]);

  return (
    <div
      className={`
        flex
        h-full
        space-x-2 sm:space-x-10
        items-center 
        ${evenElement ? 'justify-start' : 'space-x-reverse sm:space-x-reverse flex-row-reverse'}
        ${isVisible ? 'text-secondary' : 'text-primary-light'}
      `}
      style={{
        marginLeft: `-${indicatorSize / 2 - lineWidth / 2}px`,
        marginRight: `-${indicatorSize / 2 - lineWidth / 2}px`,
      }}
    >
      <svg
        viewBox='0 0 10 10'
        width={indicatorSize}
        strokeWidth={1.5}
        stroke='currentColor'
        fill={TailwindConfig.theme.backgroundColor.primary.dark}
        style={{
          flex: '0 0 ' + indicatorSize + 'px',
        }}
      >
        <circle cx={5} cy={5} r={4}/>
      </svg>
      <div
        className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{
          flex: '1 1 auto',
        }}
      >
        <EventContent event={event} />
      </div>
    </div>
  );
};

export default CVItem;
