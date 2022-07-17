import {
  ComponentPropsWithoutRef,
  forwardRef, MutableRefObject, UIEventHandler, useCallback, useEffect, useRef,
} from 'react';
import useTheme from './hooks/useTheme';
import {useRouter} from 'next/dist/client/router';

/**
 * Props for the PageContent component.
 */
export interface PageContentProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Classname for the element which wraps the children directly.
   * Per default, some styling is defined. You can override that
   * by setting this prop.
   */
  contentClassname?: string;

  id: string;
}

const PageContent = forwardRef<HTMLDivElement, PageContentProps>((props, ref) => {
  const {children, className, contentClassname, ...rest} = props;
  const {theme} = useTheme();
  const router = useRouter();
  const ownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroll = parseInt(window.sessionStorage.getItem(rest.id) || '', 10);
    if (!isNaN(scroll)) {
      if (ownRef.current) {
        ownRef.current?.scrollTo(0, scroll);
      }
    }
  }, [router.asPath]);

  const handleScroll: UIEventHandler<HTMLDivElement> = useCallback((ev) => {
    const scroll = ev.currentTarget.scrollTop;
    window.sessionStorage.setItem(rest.id, scroll.toString());
  }, [router.asPath]);

  return (
    <div className={`h-full w-full overflow-auto pt-20 md:pt-28 ${theme === 'dark' ? 'scrollbar-light' : 'scrollbar'} ${className !== undefined ? className : ''}`}
       ref={(node) => {
         ownRef.current = node;

         if (typeof ref === 'function') {
           ref(node);
         } else if (ref && node) {
           (ref as MutableRefObject<HTMLDivElement>).current = node;
         }
       }}
       onScroll={handleScroll}
       {...rest}
    >
      <div className={contentClassname ?? 'max-w-4xl mx-auto'}>
        {children}
      </div>
    </div>
  );
});
PageContent.displayName = 'PageContent';

export default PageContent;
