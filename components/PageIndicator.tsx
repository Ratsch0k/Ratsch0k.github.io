import IconButton from './IconButton';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import Logo from './icons/Logo';

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

    return (
        <div className='flex flex-row items-center'>
          <div className='absolute bottom-3 left-4 h-10 w-10'>
            <Logo strokeWidth={40}/>
          </div>
            <IconButton
                onClick={() => changePage(page - 1)}
                className='mr-2'
            >
                <ArrowLeftIcon />
            </IconButton>
            {
                (() => {
                    const circles = [];

                    for (let i = 0; i < len; i++) {
                        circles.push(
                            <div
                              key={`indicator-${i}`}
                              className={`m-1 cursor-pointer ${i === page ? 'text-secondary' : 'text-primary-lightest hover:text-primary-contrast'}`}
                              onClick={() => changePage(i)}
                            >
                                <Circle />
                            </div>
                        )
                    }

                    return circles;
                })()
            }
            <IconButton
                onClick={() => changePage(page + 1)}
                className='ml-2'
            >
                <ArrowRightIcon />
            </IconButton>
        </div>
    ); 
};

export default PageIndicator;