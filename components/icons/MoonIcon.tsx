import {defaultIconProps, IconProps, sizes} from './Icon';

export const MoonIcon = (props: IconProps) => {
  const {size, ...rest} = props;
  const dimension = sizes[size];

  return (
    <svg width={dimension} height={dimension} fill='currentColor' version="1.1" viewBox="0 0 33.867 33.867" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="m15.639 1.0583a15.875 15.875 0 0 0-13.919 15.744 15.875 15.875 0 0 0 15.875 15.875 15.875 15.875 0 0 0 14.546-9.5437 13.842 13.842 0 0 1-7.2859 2.0836 13.842 13.842 0 0 1-13.842-13.842 13.842 13.842 0 0 1 4.6256-10.317z" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".25375"/>
    </svg>

  );
};

MoonIcon.defaultProps = defaultIconProps;

export default MoonIcon;
