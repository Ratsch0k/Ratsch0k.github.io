import {ComponentProps, createRef, useCallback, useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';

export type Position = 'top' | 'bottom' | 'right' | 'left';

export interface TooltipProps extends ComponentProps<'div'> {
  label: JSX.Element | string;
  position?: Position;

  /**
   * Distance between the tooltip and the component in pixels.
   *
   * *Default: 4*
   */
  spacing?: number;

  /**
   * Time until an opened tooltip will disappear (in milliseconds)
   *
   * *Default: 250*
   */
  disappearTimeout?: number;
}

const defaultProps = {
  position: 'bottom',
  spacing: 4,
  disappearTimeout: 250,
};

const Tooltip = (props: TooltipProps & typeof defaultProps) => {
  const {children, label, position, spacing, disappearTimeout, ...rest} = props;
  // Visibility states
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState(false);

  // Timeouts
  const [, setShowTimeoutID] = useState<NodeJS.Timeout | null>(null);
  const [, setOpenTimeoutID] = useState<NodeJS.Timeout | null>(null);

  // Position
  const [pos, setPos] = useState<[number, number]>([0, 0]);

  // Create element to use as a portal
  const tooltipRoot = useRef(document.createElement('div'));
  // Ref of the children (the components to which the tooltip belongs)
  const ref = createRef<HTMLDivElement>();
  // Ref of the tooltip component itself
  const tooltipRef = createRef<HTMLDivElement>();

  /**
   * Handle adding and removing the tooltip to the DOM
   */
  useEffect(() => {

    if (open) {
      document.body.appendChild(tooltipRoot.current);
    } else {
      try {
        document.body.removeChild(tooltipRoot.current);
      } catch {
        // Expected exception if the tooltip has never been shown
      }
    }

    return () => {
      try {
        document.body.removeChild(tooltipRoot.current)
      } catch {
        // Expected exception if the tooltip has never been shown
      }
    };
  }, [open]);

  /**
   * Callback for the `onMouseEnter` event.
   * Clears timeouts which hide the tooltip and
   * shows it.
   */
  const handleMouseEnter = useCallback(() => {
    // Remove disappear timeouts if set
    setShowTimeoutID((prev) => {
      if (prev) {
        clearTimeout(prev);
      }

      return null;
    });

    setOpenTimeoutID((prev) => {
      if (prev) {
        clearTimeout(prev);
      }

      return null;
    })

    // Set open and immediately show
    setOpen(true);
    setTimeout(() => {
      setShow(true);
    }, 1);
  }, []);

  /**
   * Callback for the `onMouseLeave` callback.
   * Sets timeouts which will hide the tooltip
   */
  const handleMouseLeave = useCallback(() => {
    setShowTimeoutID(setTimeout(() => {
      setShow(false);
    }, disappearTimeout));
    setOpenTimeoutID(setTimeout(() => {
      setOpen(false);
    }, disappearTimeout + 250));
  }, [disappearTimeout]);

  /**
   * Calculates the position of the given tooltip based on its given child component.
   * @param tooltip The tooltip element
   * @param childComponent The children of the tooltip as element
   * @return [offsetTop, offsetLeft]
   */
  const calculatePosition = useCallback((
    tooltip: HTMLDivElement,
    childComponent: HTMLDivElement,
  ): [number, number] => {
    let offsetTop = 0;
    let offsetLeft = 0;
    switch (position) {
      case 'top': {
        offsetTop = -(tooltip.clientHeight + spacing);
        offsetLeft = (childComponent.clientWidth - tooltip.clientWidth) / 2;
        break;
      }
      case 'bottom': {
        offsetTop = childComponent.clientHeight + spacing;
        offsetLeft = (childComponent.clientWidth - tooltip.clientWidth) / 2;
        break;
      }
      case 'left': {
        offsetTop = childComponent.clientHeight / 2 - tooltip.clientHeight / 2;
        offsetLeft = -(tooltip.clientWidth + spacing);
        break;
      }
      case 'right': {
        offsetTop = childComponent.clientHeight / 2 - tooltip.clientHeight / 2;
        offsetLeft = childComponent.clientWidth + spacing;
        break;
      }
    }
    let element: HTMLElement = childComponent;

    do {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;

      element = element.offsetParent as HTMLElement;
    } while (element !== null);

    // Check for boundaries
    offsetTop = Math.max(0, offsetTop);
    offsetTop = Math.min(offsetTop, window.innerHeight - tooltip.clientHeight);
    offsetLeft = Math.max(0, offsetLeft);
    offsetLeft = Math.min(offsetLeft, window.innerWidth - tooltip.clientWidth);

    return [offsetTop, offsetLeft];
  }, [position, spacing]);

  /**
   * Set event listeners and calculate position of tooltip
   */
  useEffect(() => {
    if (ref.current && tooltipRef.current) {
      ref.current.addEventListener('mouseenter', handleMouseEnter);
      ref.current.addEventListener('mouseleave', handleMouseLeave);
      setPos(calculatePosition(tooltipRef.current, ref.current));
    }
  }, [ref.current, tooltipRef.current, open, calculatePosition]);

  /**
   * The tooltip component.
   *
   * _**NOTE**: Is possibly created on each render which could hurt performance. If problem, check if this could
   * be moved into a ref._
   */
  const tooltip = (
    <div
      className='z-[70] absolute bg-gray-700 p-1 rounded-lg drop-shadow-xl max-w-xs'
      style={{
        top: pos[0],
        left: pos[1],
        opacity: show ? 1 : 0,
        transition: 'opacity 250ms',
      }}
      ref={tooltipRef}
    >
      {label}
    </div>
  );

  return (
    <>
      <div ref={ref} {...rest}>
        {children}
      </div>
      {ReactDOM.createPortal(tooltip, tooltipRoot.current)}
    </>
  );
};

Tooltip.defaultProps = defaultProps;

export default Tooltip;