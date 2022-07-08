import {
  ComponentPropsWithoutRef, useEffect, useState
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
  const [delayedOpen, setDelayedOpen] = useState<boolean | undefined>(false);

  useEffect(() => {
    if (open) {
      setImmediate(() => setDelayedOpen(open));
    } else {
      setTimeout(() => setDelayedOpen(false), 150);
    }
  }, [open]);

  return (
    <Modal open={open || delayedOpen}>
      <div
        className='h-full w-full flex items-center transition-opacity'
        style={{
          backgroundColor: 'rgba(0.0, 0.0, 0.0, 0.3)',
          opacity: (open && delayedOpen) ? 1 : 0,
        }}
      >
        <div
          className={`bg-white dark:bg-background-dark text-black dark:text-primary-contrast rounded-xl z-40 m-auto text-black p-4 ${className !== undefined ? className : ''}`}
          style={{
            opacity: (open && delayedOpen) ? 1 : 0,
            transition: 'color, background-color, opacity',
            transitionDuration: '150ms',
          }}
          {...rest}
        >
          {children}
        </div>
      </div>
    </Modal>
  );
};

export default Dialog;