import tailwindConfig from '../components/TailwindConfig';
import convert from 'color-convert';
import {FC} from 'react';

const primary = convert.hex.rgb(tailwindConfig.theme.colors.primary.DEFAULT);

const Block = () => {
  return (
    <div
      className='bg-white inline-block h-full ml-2 mr-2 align-middle w-[15%] h-[0.25rem]'
      style={{
        transform: 'translateY(4px)'
      }}
    />
  )
};

export interface PageTitleProps {
  border?: boolean;
}

const PageTitle: FC<PageTitleProps> = ({children, border}) => {

  return (
    <div className='z-20 absolute top-0 pr-2 sm:pr-0 w-full'>
      <div className={`text-4xl w-full text-center md:text-6xl pt-4 pb-4 flex items-center justify-center ${border && 'border-b'} border-primary-dark`}
        style={{
          backdropFilter: 'blur(8px)',
          backgroundColor: `rgba(${primary[0]}, ${primary[1]}, ${primary[2]}, 0.5)`,
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