import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  padding?: number;
}

const IconButton: React.FC<IconButtonProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button className={`p-1 text-primary-dark rounded hover:text-white hover:bg-primary-dark transition-colors ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default IconButton;