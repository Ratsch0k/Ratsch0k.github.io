import {
  ComponentPropsWithoutRef,
  CSSProperties,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';
import Modal from './Modal';

export type DialogState = 'closed' | 'preopening' | 'opening' | 'open' | 'closing';

export interface AnimatedDialogProps extends ComponentPropsWithoutRef<'div'>{
  /**
   * Defines whether the dialog should be opened or not.
   * Changing this will only trigger closing or opening the dialog but will not immediately change the internal state.
   */
  open?: boolean;

  /**
   * Style used when the dialog is closed.
   */
  closeStyle: CSSProperties;

  /**
   * Style used when the dialog is open.
   */
  openStyle: CSSProperties;

  /**
   * Is triggered when the internal state of the dialog changes.
   * @param state The new state
   */
  onStateChange(state: DialogState): void;
}

/**
 * # Animated dialog
 * When the dialog is closed, it will show its children. When opening it (by changing the `open` prop), the children
 * will be animate from their original position and size to a full dialog size. Also, the children will be moved
 * from their original place in the DOM into a Modal.
 */
export const AnimatedDialog = forwardRef<HTMLDivElement, AnimatedDialogProps>((props, ref) => {
  const {children, open: outerOpen, onStateChange, closeStyle, openStyle, ...rest} = props;
  /**
   * Ref to the wrapper component which wraps the children when the dialog is closed.
   */
  const childRef = useRef<HTMLDivElement | null>(null);
  /**
   * Ref to the dialog content within the modal.
   */
  const dialogContentRef = useRef<HTMLDivElement | null>(null);
  /**
   * Internal state.
   */
  const [state, setState] = useState<DialogState>('closed');

  /*
   * Trigger the {@link onStateChange} method when the state changes.
   */
  useEffect(() => {
    onStateChange(state);
  }, [state]);

  /*
   * Transition state according to changes to the `open` prop.
   */
  useEffect(() => {
    if (outerOpen && state === 'closed') {
      setState('preopening');
    } else if (!outerOpen && state === 'open') {
      setState('closing');
    }
  }, [outerOpen]);

  /*
   * Internal state machine.
   *
   * Handles state transitions
   */
  useEffect(() => {
    // Unnecessary checks but otherwise TypeScript complains.
    if (childRef.current && dialogContentRef.current) {
      if (state === 'preopening') {
        /*
         * Preopening
         * ----------
         *
         * Animate the dialog content from the children original position and size to
         * their new style (`openStyle`).
         * After starting the animation it will immediately transition to the `opening`
         * state. When the animation is done, it will transition into the `open` state.
         *
         * Opening state is only used by outer components and inner css transitions.
         */
        const childRect = childRef.current.getBoundingClientRect();

        const openingAnim = dialogContentRef.current.animate([
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...closeStyle as any,
            /*
             * Set position and size styles to enable animating them.
             */
            height: childRect.height + 'px',
            width: childRect.width + 'px',
            top: childRect.top + 'px',
            left: childRect.left + 'px',
          },
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...openStyle as any,
          }
        ], {duration: 500, iterations: 1, fill: 'both', easing: 'ease-in-out'});

        openingAnim.addEventListener('finish', () => {
          setState('open');
        });

        setTimeout(() => setState('opening'), 0);
      } else if (state === 'closing') {
        /*
         * Closing
         * -------
         *
         * Animate the dialog content back to the children original position and size.
         * After the animation is done, transition to `closed` state
         */
        const childRect = childRef.current.getBoundingClientRect();

        const closeAnim = dialogContentRef.current.animate([
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...closeStyle as any,
            height: childRect.height + 'px',
            width: childRect.width + 'px',
            top: childRect.top + 'px',
            left: childRect.left + 'px',
          },
        ], {duration: 500, iterations: 1, fill: 'both', easing: 'ease-in-out'});

        closeAnim.addEventListener('finish', () => {
          setState('closed');
        });
      }
    }
  }, [state]);

  return (
    <>
      <div ref={childRef} {...rest} style={closeStyle}>
        <div ref={ref}>
        {state === 'closed' &&
          children
        }
        </div>
      </div>
      <Modal
        open={state !== 'closed'}
        style={{
          transition: 'background 500ms',
          background: state === 'opening' || state === 'open' ? 'rgba(0.0, 0.0, 0.0, 0.6)' : '#00000000',
        }}
      >
            <div
                ref={dialogContentRef}
                style={{
                  position: 'absolute',
                }}
            >
              {children}
            </div>
      </Modal>
    </>
  )
});

AnimatedDialog.displayName = 'AnimatedDialog';

export default AnimatedDialog;