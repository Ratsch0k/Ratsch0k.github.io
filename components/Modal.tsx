import {createPortal} from 'react-dom';
import {CSSProperties, PropsWithChildren, useEffect, useRef} from 'react';

export interface ModalProps {
  open?: boolean;
  noFullscreen?: boolean;
  zIndex?: number | undefined;
  style?: CSSProperties;
  className?: string;
}

const Modal = (props: PropsWithChildren<ModalProps>) => {
  const {children, open, noFullscreen, zIndex = 40, className, style} = props;
  const modalEl = useRef(document.createElement('div'));

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const root = document.getElementById('modal-root')!;

    if (open) {
      root.appendChild(modalEl.current);
    } else {
      try {
        root.removeChild(modalEl.current);
      } catch (e) {
        // Ignore since this is expected if the modal just mounted
      }
    }

    return () => {
      try {
        root.removeChild(modalEl.current);
      } catch (e) {
        // Ignore since this is expected if this component unmounts and the modal is not opened
      }
    }
  }, [open]);

  return createPortal(
    <div className={`absolute ${!noFullscreen ? 'h-full w-full': ''} ${className ? className : ''}`}
      style={{
        zIndex: zIndex,
        ...style,
      }}
    >
      {children}
    </div>,
    modalEl.current,
  );
};

export default Modal;