import {ComponentPropsWithoutRef} from 'react';

const IconButton = (props: ComponentPropsWithoutRef<'button'>) => {
  const {children, className, ...rest} = props;

  return (
    <button className={`p-1 text-primary-lightest hover:text-primary-dark rounded-md hover:bg-primary-lightest transition-colors ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;