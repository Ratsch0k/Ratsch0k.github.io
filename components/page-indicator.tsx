import { NextPage } from 'next';
import React from 'react';

interface PageIndicatorProps {
    len: number;
    page: number;
    changePage(page: number): void;
}

interface CircleProps {
    color: string;
}

const Circle: NextPage<CircleProps> = ({color}) => {
    return (
        <svg width={16} height={16}>
            <circle cx={8} cy={8} r={8} fill={color} className='transition-colors duration-500'/>
        </svg>
    );
};

const PageIndicator: NextPage<PageIndicatorProps> = (props) => {
    const {len, page, changePage} = props;

    return (
        <div className='flex flex-row' style={{transform: `translateX(calc(50% - ${len} * 16px - ${len-1} * 0.25rem))`}}>
            {
                (() => {
                    const circles = [];

                    for (let i = 0; i < len; i++) {
                        circles.push(
                            <div className='m-1 cursor-pointer' onClick={() => changePage(i)}>
                                <Circle color={i === page ? 'white' : '#3B4368'} />
                            </div>
                        )
                    }

                    return circles;
                })()
            }
        </div>
    ); 
};

export default PageIndicator;