import {
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';
import useTheme from './hooks/useTheme';

const PageContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>((props, ref) => {
  const {children, className, ...rest} = props;
  const {theme} = useTheme();

  return (
    <div className={`h-full w-full overflow-auto pt-20 md:pt-28 ${theme === 'dark' ? 'scrollbar-light' : 'scrollbar'} ${className !== undefined ? className : ''}`}
         ref={ref}
         {...rest}
    >
      <div className='max-w-4xl mx-auto'>
        {children}
      </div>
    </div>
  );
});
PageContent.displayName = 'PageContent';

export default PageContent;
