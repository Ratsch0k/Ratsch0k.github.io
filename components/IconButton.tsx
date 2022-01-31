import {ComponentPropsWithoutRef} from 'react';

const IconButton = (props: ComponentPropsWithoutRef<'button'>) => {
  const {children, className, ...rest} = props;

  return (
    <button className={`p-1 text-primary-lightest hover:text-primary-contrast rounded-md hover:bg-primary-dark transition-colors ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;