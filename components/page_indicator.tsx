import IconButton from './icon-button';
import ArrowLeftIcon from './icons/arrow-left';
import ArrowRightIcon from './icons/arrow-right';
import Logo from './icons/Logo';

interface PageIndicatorProps {
    len: number;
    page: number;
    changePage(page: number): void;
}

interface CircleProps {
    color: string;
}

const CIRCLE_SIZE = 10;

const Circle = ({color}: CircleProps) => {
    
    return (
        <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            <circle cx={CIRCLE_SIZE / 2} cy={CIRCLE_SIZE / 2} r={CIRCLE_SIZE / 2} fill={color} className='transition-colors duration-500'/>
        </svg>
    );
};

const PageIndicator = (props: PageIndicatorProps) => {
    const {len, page, changePage} = props;

    return (
        <div className='flex flex-row items-center'>
          <div className='absolute bottom-3 left-4 h-10 w-10'>
            <Logo />
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
                            <div key={`indicator-${i}`} className='m-1 cursor-pointer' onClick={() => changePage(i)}>
                                <Circle color={i === page ? 'white' : '#3B4368'}/>
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