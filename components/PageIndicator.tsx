import IconButton from './IconButton';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import {useTranslation} from 'react-i18next';
import Tooltip from './Tooltip';

interface PageIndicatorProps {
    len: number;
    page: number;
    changePage(page: number): void;
}

const CIRCLE_SIZE = 10;

const Circle = () => {
    
    return (
        <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE} fill='currentColor'>
            <circle cx={CIRCLE_SIZE / 2} cy={CIRCLE_SIZE / 2} r={CIRCLE_SIZE / 2} className='transition-colors duration-500'/>
        </svg>
    );
};

const PageIndicator = (props: PageIndicatorProps) => {
    const {len, page, changePage} = props;
    const {t} = useTranslation();

    return (
        <div className='flex flex-row items-center'>
            <IconButton
                onClick={() => changePage(page - 1)}
                className='mr-2'
                tooltip={t('previousPage')}
                tooltipProps={{position: 'top'}}
            >
                <ArrowLeftIcon />
            </IconButton>
            {
                (() => {
                    const circles = [];

                    for (let i = 0; i < len; i++) {
                        circles.push(
                          <Tooltip key={`indicator-${i}`} label={t('toPage', {page: i + 1})} position='top'>
                            <div
                              className={`m-1 cursor-pointer ${i === page ? 'text-secondary' : 'text-primary dark:text-primary-lightest hover:text-secondary dark:hover:text-primary-contrast'}`}
                              onClick={() => changePage(i)}
                            >
                                <Circle />
                            </div>
                          </Tooltip>
                        )
                    }

                    return circles;
                })()
            }
            <IconButton
                onClick={() => changePage(page + 1)}
                className='ml-2'
                tooltip={t('nextPage')}
                tooltipProps={{position: 'top'}}
            >
                <ArrowRightIcon />
            </IconButton>
        </div>
    ); 
};

export default PageIndicator;