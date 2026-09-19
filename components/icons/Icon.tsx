import {ComponentPropsWithoutRef} from 'react';

/**
 * Available sizes.
 */
export type Sizes = 'small' | 'medium' | 'large';

/**
 * Props for Icons.
 */
export interface IconProps extends ComponentPropsWithoutRef<'svg'> {
  size?: Sizes;
}

/**
 * Available sizes for icons.
 */
export const sizes = {
  small: 16,
  medium: 24,
  large: 32,
}

/**
 * Size used by every icon that doesn't get an explicit one.
 */
export const defaultIconSize: Sizes = 'medium';