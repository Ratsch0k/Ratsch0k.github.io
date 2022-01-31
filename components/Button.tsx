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
      className={'text-md rounded hover:bg-primary-dark font-bold uppercase p-4 transition fit-content ' + className}
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