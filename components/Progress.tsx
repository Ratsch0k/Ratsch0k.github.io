import {CSSProperties, useEffect, useState} from 'react';

export interface ProgressProps {
  value: number;
  xs?: {
    root?: CSSProperties;
    progress?: CSSProperties;
  }
  animated?: boolean;
  leftLabel?: string;
  rightLabel?: string;
  delay?: number;
}

const Progress = (props: ProgressProps) => {
  const {value: _value, xs, animated, leftLabel, rightLabel, delay} = props;
  const [value, setValue] = useState<number>(animated ? 0 : _value);

  useEffect(() => {
    setValue(_value);
  }, [_value]);

  return (
    <div className='flex space-x-4'>
      {
        leftLabel !== undefined &&
        <span className='text-xs'>
          {leftLabel}
        </span>
      }
      <div
        className='w-full my-auto h-2 rounded-xl p-[1px] overflow-hidden border transition-colors border-primary dark:border-primary-lightest'
        style={xs?.root}
      >
        <div
          className='bg-primary dark:bg-primary-lightest h-[4px] rounded-xl'
          style={{
            transition: 'width, background',
            transitionDuration: '500ms, 150ms',
            width: value * 100 + '%',
            transitionDelay: (delay !== undefined ? delay : 0) + 'ms, 0ms',
            ...xs?.progress,
          }}
        />
      </div>
      {
        rightLabel !== undefined &&
        <span className='text-xs'>
          {rightLabel}
        </span>
      }
    </div>
  );
};

export default Progress;