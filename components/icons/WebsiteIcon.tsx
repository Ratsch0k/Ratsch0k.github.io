import {defaultIconProps, IconProps, sizes} from './Icon';

const WebsiteIcon = (props: IconProps) => {
  const {size, ...rest} = props;
  const dimension = sizes[size];

  return (
    <svg stroke='currentColor' width={dimension} height={dimension} version='1.1' viewBox='0 0 264.58 264.58' xmlns='http://www.w3.org/2000/svg' {...rest}>
      <rect x='20.917' y='44.73' width='222.77' height='176.64' ry='8.1528' fill='none' strokeLinecap='round' strokeWidth='15.376'/>
      <path d='m20.794 81.629h223.36' fill='none' strokeWidth='15.376'/>
      <g transform='scale(.96585 1.0354)' fill='currentColor' strokeWidth='.25627' aria-label='www'>
        <path d='m44.141 119.81h11.612l6.2733 25.761 6.3067-25.761h9.9773l6.2733 25.494 6.3067-25.494h11.612l-9.8438 37.373h-13.047l-6.3067-25.694-6.2733 25.694h-13.047z'/>
        <path d='m107.27 119.81h11.612l6.2733 25.761 6.3067-25.761h9.9773l6.2733 25.494 6.3067-25.494h11.612l-9.8438 37.373h-13.047l-6.3067-25.694-6.2733 25.694h-13.047z'/>
        <path d='m170.41 119.81h11.612l6.2733 25.761 6.3067-25.761h9.9773l6.2733 25.494 6.3067-25.494h11.612l-9.8438 37.373h-13.047l-6.3067-25.694-6.2733 25.694h-13.047z'/>
      </g>
    </svg>

  );
};

WebsiteIcon.defaultProps = defaultIconProps;

export default WebsiteIcon;