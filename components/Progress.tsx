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
}

const Progress = (props: ProgressProps) => {
  const {value: _value, xs, animated, leftLabel, rightLabel} = props;
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
        className='w-full my-auto h-2 rounded-xl p-[1px] overflow-hidden border border-primary-lightest'
        style={xs?.root}
      >
        <div
          className='bg-primary-lightest h-[4px] rounded-xl transition-all duration-500'
          style={{
            width: value * 100 + '%',
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