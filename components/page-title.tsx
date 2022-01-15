import React from "react";
import tailwindConfig from '../components/tailwind-config';
import convert from 'color-convert';

const primaryDark = convert.hex.rgb(tailwindConfig.theme.colors.primary.dark);

const Block = () => {
  return (
    <div
      className='bg-white inline-block h-full ml-2 mr-2 align-middle'
      style={{
        width: '15%',
        height: '0.25rem',
        transform: 'translateY(4px)'
      }}
    ></div>
  )
};

const PageTitle: React.FC = ({children}) => {
  return (
    <div className='z-20 absolute top-0 pr-3 sm:pr-0 w-full'>
      <div className='text-4xl w-full text-center md:text-6xl pt-4 pb-4 flex items-center justify-center border-b border-gray-700'
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: `rgba(${primaryDark[0]}, ${primaryDark[1]}, ${primaryDark[2]}, 0.5)`,
        }}
      >
        <Block />
        <span>
          {children}
        </span>
        <Block />
      </div>
    </div>
  )
};

export default PageTitle;