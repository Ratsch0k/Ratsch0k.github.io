import {FC, ReactElement, useRef} from 'react';
import tailwindConfig from './TailwindConfig';
import convert from 'color-convert';

const primaryDark = convert.hex.rgb(tailwindConfig.theme.colors.primary.dark);

export interface TopicContainerProps {
  title: string;
  icon?: ReactElement;
  pos: number;
}

const SkillContainer: FC<TopicContainerProps> = (props) => {
  const {title, pos, icon, children} = props;
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`${pos > 0 && 'mt-16'} relative p-6 rounded-md flex flex-col justify-start items-center w-full ${pos % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} bg-primary-dark`}
      style={{
        animation: `appear-from-below 500ms ease-in-out ${pos * 200}ms both`,
        filter: `drop-shadow(0 0 0.4rem rgb(${primaryDark[0]}, ${primaryDark[1]}, ${primaryDark[2]}))`
      }}
    >
      <div
        className='flex-grow-0 flex-shrink-0 mr-4 text-1xl text-secondary max-w-[200px]'
      >
        <b>
          {title}
        </b>
      </div>
      <div className='h-full'>
        <div
          className='bg-secondary w-100-8 h-px left-0 mt-4 ml-4 sm:w-px sm:mr-4 sm:left-auto sm:mt-4 sm:h-100-8 sm:ml-0 sm:top-0 absolute'
        />
        <div className='justify-center flex items-center h-full'>
          <div
            className='bg-primary-dark p-1 text-secondary'
            style={{
              transform: 'translateX(-14px)'
            }}
          >
            {icon}
          </div>
        </div>
      </div>
      <div className='flex-1 p-2'>
        {children}
      </div>
    </div>
  );
};

export default SkillContainer;