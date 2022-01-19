import React, {CSSProperties} from 'react';

export interface ComponentProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export type Component<T = Record<string, unknown>> = React.FC<T & ComponentProps>;