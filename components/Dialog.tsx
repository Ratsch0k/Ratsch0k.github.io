import {
  ComponentPropsWithoutRef
} from 'react';
import Modal, {ModalProps} from './Modal';

export interface DialogProps extends ModalProps, ComponentPropsWithoutRef<'div'> {
  elevation?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

/**
 * ## Dialog
 * Shown in front of the rest of page to get the users attention
 * @param props Props
 */
const Dialog = (props: DialogProps) => {
  const {open, children, className, ...rest} = props;

  return (
    <Modal open={open}>
      <div
        className='h-full w-full flex items-center'
        style={{
          backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.3)'
        }}
      >
        <div
          className={`bg-white dark:bg-background-dark text-black dark:text-primary-contrast transition-colors rounded-xl z-40 m-auto text-black p-4 ${className !== undefined ? className : ''}`}
          {...rest}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;