import React from "react";

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
    <div className='text-4xl w-full text-center md:text-6xl pt-4 flex items-center justify-center'>
      <Block />
      <span>
        {children}
      </span>
      <Block />
    </div>
  )
};

export default PageTitle;