import React, {CSSProperties} from "react";

export interface ComponentProps {
  className?: string;
  id?: string;
  style?: CSSProperties;
}

export type Component<T = {}> = React.FC<T & ComponentProps>;