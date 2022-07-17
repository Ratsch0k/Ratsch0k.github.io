import {ComponentPropsWithoutRef} from 'react';

/**
 * Wrapper around <a/> to assign styling.
 * @param props Usual props for a link
 */
const Link = (props: ComponentPropsWithoutRef<'a'>) => {
  return (
    <a
      target='_blank'
      rel='noreferrer'
      className='font-bold hover:underline hover:visited:text-primary visited:text-primary dark:hover:visited:text-primary-lightest dark:visited:text-primary-lightest' {...props}
    />
  );
};

export default Link;