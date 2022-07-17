import ReactDOM from 'react-dom';
import {CSSProperties, PropsWithChildren, useEffect, useRef} from 'react';

export interface ModalProps {
  open?: boolean;
  noFullscreen?: boolean;
  zIndex?: number | undefined;
  style?: CSSProperties;
  className?: string;
}

const defaultProps = {
  zIndex: 40,
};

const Modal = (props: PropsWithChildren<ModalProps & typeof defaultProps>) => {
  const {children, open, noFullscreen, zIndex, className, style} = props;
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

  return ReactDOM.createPortal(
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

Modal.defaultProps = defaultProps;

export default Modal;