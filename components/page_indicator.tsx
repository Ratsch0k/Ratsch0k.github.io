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

const CIRCLE_SIZE = 10;

const Circle: NextPage<CircleProps> = ({color}) => {
    
    return (
        <svg width={CIRCLE_SIZE} height={CIRCLE_SIZE}>
            <circle cx={CIRCLE_SIZE / 2} cy={CIRCLE_SIZE / 2} r={CIRCLE_SIZE / 2} fill={color} className='transition-colors duration-500'/>
        </svg>
    );
};

const PageIndicator: NextPage<PageIndicatorProps> = (props) => {
    const {len, page, changePage} = props;

    return (
        <div className='flex flex-row'>
            {
                (() => {
                    const circles = [];

                    for (let i = 0; i < len; i++) {
                        circles.push(
                            <div className='m-1 cursor-pointer' onClick={() => changePage(i)}>
                                <Circle color={i === page ? 'white' : '#3B4368'}/>
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