import {createRef, CSSProperties, PropsWithChildren, useEffect, useRef, useState} from 'react';
import Modal from './Modal';

export interface GrowableContainerProps {
  open: boolean;
  newStyle: CSSProperties;
  duration?: number;
}

const defaultProps = {
  duration: 500,
}

const AnimatedContainer = (props: PropsWithChildren<GrowableContainerProps & typeof defaultProps>) => {
  const {children, open, newStyle, duration} = props;
  const normalRef = createRef<HTMLDivElement>();
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [state, setState] = useState<'closed' | 'beforeopening' | 'opening' | 'open' | 'closing'>('closed');

  useEffect(() => {
    if (open && state === 'closed') {
      setState('beforeopening');
      setTimeout(() => {
        setState('opening');
        setTimeout(() => {
          setState('open');
        }, duration);
      }, 10);
    } else if (!open && state === 'open') {
      setState('closing');
      setTimeout(() => setState('closed'), duration);
    }
  }, [open]);

  useEffect(() => {
    if (normalRef.current && (state === 'beforeopening' || state === 'closed')) {
      setRect(normalRef.current.getBoundingClientRect());
    }
  }, [normalRef.current, state]);

  useEffect(() => {
    console.dir(rect);
  },[rect]);

  return (
    <>
      <Modal
        open={state !== 'closed'}
        noFullscreen
        style={{
          transition: `all ${duration}ms`,
          top: rect?.top,
          left: rect?.left,
          height: rect?.height,
          width: rect?.width,
          ...(state === 'opening' || state === 'open' ? newStyle : {}),
        }}
      >
        {children}
      </Modal>
      <div
        ref={normalRef}
        style={{
          ...(state !== 'closed' ? {
            top: rect?.top,
            left: rect?.left,
            height: rect?.height,
            width: rect?.width,
          } : {}),
        }}
      >
        {
          (state === 'closed' || state === 'beforeopening') &&
          children
        }
      </div>
    </>
  )
};

AnimatedContainer.defaultProps = defaultProps;

export default AnimatedContainer;