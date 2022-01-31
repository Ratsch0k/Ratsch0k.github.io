import {
  ComponentPropsWithoutRef,
  forwardRef,
} from 'react';

const PageContent = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'>>((props, ref) => {
  const {children, className, ...rest} = props;

  return (
    <div className={`h-full overflow-auto max-w-4xl pt-20 md:pt-28 mx-auto scrollbar ${className !== undefined ? className : ''}`}
         ref={ref}
         {...rest}
    >
      {children}
    </div>
  );
});
PageContent.displayName = 'PageContent';

export default PageContent;
