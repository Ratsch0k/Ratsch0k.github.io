import {
  ComponentPropsWithoutRef
} from 'react';
import CloseIcon from './icons/CloseIcon';
import IconButton from './IconButton';

export interface DialogTitleProps extends ComponentPropsWithoutRef<'h2'> {
  /**
   * Callback for the close button
   */
  close?: () => void;

  /**
   * On default, on the right of the title a close button is shown.
   * If this props is false the button wil not be shown.
   */
  noClose?: boolean;
}

const DialogTitle = (props: DialogTitleProps) => {
  const {children, close, noClose, ...rest} = props;

  return (
    <h2 className='text-2xl font-bold align-baseline mb-4' {...rest}>
      {children}
      {
        !noClose &&
        <IconButton
            onClick={close}
            className='float-right'
        >
          <CloseIcon />
        </IconButton>
      }
    </h2>
  )
};

export default DialogTitle;