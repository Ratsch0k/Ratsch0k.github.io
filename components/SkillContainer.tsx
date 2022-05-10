import {FC, ReactElement, useRef} from 'react';

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
      className={`${pos > 0 && 'mt-10'} border border-primary-light relative p-2 sm:p-6 rounded-2xl flex flex-col justify-start items-center w-full bg-primary`}
      style={{
        animation: `appear-from-below 500ms ease-in-out ${pos * 200}ms both`,
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
          className='bg-secondary w-100-8 h-px left-0 mt-4 ml-4 absolute'
        />
        <div className='justify-center flex items-center h-full'>
          <div
            className='bg-primary p-1 text-secondary'
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