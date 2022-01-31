import {defaultIconProps, IconProps, sizes} from './Icon';

const AppIcon = (props: IconProps) => {
  const {size, ...rest} = props;
  const dimensions = sizes[size];

  return (
    <svg stroke='currentColor' width={dimensions} height={dimensions} version="1.1" viewBox="0 0 264.58 264.58" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <g fill="none" strokeLinecap="round">
        <path d="m109.75 218.24h45.185" strokeWidth="15.875"/>
        <rect x="72.538" y="19.622" width="119.51" height="225.34" ry="19.678" strokeWidth="18.521"/>
      </g>
    </svg>

  );
};

AppIcon.defaultProps = defaultIconProps;

export default AppIcon;