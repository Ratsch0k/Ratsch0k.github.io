import ReactDOM from 'react-dom';
import {FC, useEffect, useRef} from 'react';

export interface ModalProps {
  open: boolean;
}

export const Modal: FC<ModalProps> = (props) => {
  const {children, open} = props;
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

  return ReactDOM.createPortal(children, modalEl.current);
}

export default Modal;