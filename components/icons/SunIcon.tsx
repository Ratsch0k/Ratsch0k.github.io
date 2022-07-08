import {defaultIconProps, IconProps, sizes} from './Icon';

export const SunIcon = (props: IconProps) => {
  const {size, ...rest} = props;
  const dimension = sizes[size];

  return (
    <svg width={dimension} height={dimension} version="1.1" fill='currentColor' viewBox="0 0 33.867 33.867" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <circle cx="16.934" cy="16.933" r="4.1252" strokeLinecap="round" strokeLinejoin="round" strokeWidth=".16096"/>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2.3251">
        <path d="m16.934 1.8206v6.3943"/>
        <path d="m16.934 25.652v6.3943"/>
        <path d="m32.047 16.934h-6.3943"/>
        <path d="m8.2147 16.934h-6.3943"/>
        <path d="m27.62 6.2471-4.5215 4.5215"/>
        <path d="m10.768 23.099-4.5215 4.5215"/>
        <path d="m27.62 27.62-4.5215-4.5215"/>
        <path d="m10.768 10.769-4.5215-4.5215"/>
      </g>
    </svg>
  );
};

SunIcon.defaultProps = defaultIconProps;

export default SunIcon;
