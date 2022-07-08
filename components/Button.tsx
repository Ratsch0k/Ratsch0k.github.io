import {ComponentPropsWithoutRef} from 'react';

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  fullWidth?: boolean;
}

/**
 * ## Button
 * Default styled button
 * @param props Props
 */
const Button = (props: ButtonProps) => {
  const {className, children, style, fullWidth, ...rest} = props;

  return (
    <button
      className={'text-md rounded-xl transition-colors text-black hover:bg-primary hover:text-primary-contrast dark:text-primary-contrast dark:hover:text-black dark:hover:bg-white font-bold uppercase p-2 fit-content ' + className}
      style={{
        width: fullWidth ? '100%' : 'fit-content',
        ...style,
      }}
      {...rest}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;