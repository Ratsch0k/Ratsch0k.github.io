import {CSSProperties, PropsWithChildren} from 'react';

const sizeMapping = {
  small: 'p-0.5 text-xs px-1.5',
  medium: 'p-1 text-sm px-2',
  large: 'p-1.5 text.sm px-2',
}

const colorMapping = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
}

export interface ChipProps {
  color?: 'primary' | 'secondary';
  size?: keyof typeof sizeMapping;
  classes?: {
    root?: CSSProperties;
  },
  className?: string;
}

const defaultProps = {
  color: 'secondary',
  size: 'medium',
};

/**
 * ## Chip
 * A small component to show or categorize some component.
 * @param props Props
 */
const Chip = (props: PropsWithChildren<ChipProps & typeof defaultProps>) => {
  const {color, size, children, classes, className} = props;

  // Get styles dependent on props
  const classSizeChange = sizeMapping[size];
  const classColorChange = colorMapping[color];

  return (
    <span
      className={`rounded-3xl ${classColorChange} ${classSizeChange} font-bold text-secondary-contrast ${className !== undefined ? className: ''}`}
      style={{
        ...classes?.root,
      }}
    >
      {children}
    </span>
  );
}

Chip.defaultProps = defaultProps;

export default Chip;