import React, {ComponentProps, ComponentPropsWithoutRef} from 'react';
import Tooltip, {TooltipProps} from './Tooltip';

export interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  tooltip?: string;
  tooltipProps?: Omit<Omit<TooltipProps, keyof ComponentProps<'div'>>, 'label'>;
}

const iconButtonClassName = 'p-2 rounded-lg text-primary dark:text-primary-lightest hover:text-primary-contrast hover:bg-primary dark:hover:text-primary dark:hover:bg-primary-lightest transition-all duration-250';

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  const {children, className, tooltip, tooltipProps, ...rest} = props;

  const iconButton = (
    <button
      ref={ref}
      className={`${iconButtonClassName} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
  if (tooltip) {
    return (
      <Tooltip label={tooltip} {...tooltipProps}>
        {iconButton}
      </Tooltip>
    );
  }

  return iconButton;
});

IconButton.displayName = 'IconButton';

export default IconButton;