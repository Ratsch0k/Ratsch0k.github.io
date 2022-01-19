/**
 * Props of the contents of a page.
 */
export interface PageComponentProps {
  setScrollable: (value: boolean) => void;
  firstPage: boolean;
}

/**
 * Type of a page content component.
 */
export type PageComponent = (props: PageComponentProps) => JSX.Element;