import {FC, RefObject, useCallback, useEffect, useRef, useState} from 'react';
import CloseIcon from './icons/CloseIcon';
import Chip from './Chip';
import ProjectTypeIndicator, {ProjectType} from './ProjectTypeIndicator';
import Tooltip from './Tooltip';
import {useTranslation} from 'react-i18next';
import AnimatedDialog, {DialogState} from './AnimatedDialog';
import useTheme from './hooks/useTheme';


export const projectFlags = [
  'Javascript',
  'Typescript',
  'Python',
  'Java',
  'C++',
  'Rust',
  'Dart',
  'ReactJS',
  'Flutter',
  'NodeJS',
  'ExpressJS',
  'Spring',
  'GraphQL',
  'REST',
  'Postgresql',
  'MongoDB',
  'Angular',
  'NextJS'
] as const;
export type ProjectFlag = typeof projectFlags[number];

export interface ProjectContainer {
  index: number;
  title: string | JSX.Element;
  flags: ProjectFlag[];
  scrollTop: number;
  types: ProjectType[];
  open: boolean;
  setOpen(value: boolean): void;
  scrollRef: RefObject<HTMLDivElement>;
}

export const BASE_OFFSET = '7rem';
export const OFFSET = '8rem';

const ProjectContainer: FC<ProjectContainer> = (props) => {
  const {children, index, title, flags, types, open, setOpen, scrollRef} = props;
  const {t} = useTranslation();
  const root = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean | null>(null);
  const [initialVisibility, setInitialVisibility] = useState<boolean | null>(null);
  const [wasVisible, setWasVisible] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [dialogState, setDialogState] = useState<DialogState>('closed');
  const {theme} = useTheme();

  useEffect(() => {
    if (dialogState === 'opening') {
      setOpen(true);
    } else if (dialogState === 'closing') {
      setOpen(false);
    }
  }, [dialogState]);

  const handleIntersect: IntersectionObserverCallback = useCallback((entries) => {
    const isIntersecting = entries[0].isIntersecting;

    setVisible((visible) => {
      if (visible === null) {
        setInitialVisibility(isIntersecting);
        return isIntersecting;
      } else if (!visible) {
        return isIntersecting;
      }

      return visible;
    });
  }, []);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setWasVisible(true)
      }, ((initialVisibility ? index : 0) * 200) + 500);
    }
  }, [visible]);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if(root.current && scrollRef.current) {
      observer.current = new IntersectionObserver(handleIntersect, {
        threshold: 1.0,
        root: scrollRef.current,
      })
      observer.current.observe(root.current);
    }
    return () => {
      if(observer.current) {
        observer.current.disconnect();
      }
    }
  }, [root.current, scrollRef]);

  return (
    <AnimatedDialog
      ref={root}
      closeStyle={{
        zIndex: 10,
        height: '6.1rem',
        transitionDuration: '500ms, 500ms, 500ms',
        width: '90%',
      }}
      openStyle={{
        height: '95%',
        width: 'min(95%, 1000px)',
        top: '2.5%',
        left: 'calc((100% - min(95%, 1000px)) / 2)',
      }}
      open={dialogOpen}
      onStateChange={setDialogState}
    >
      {
        visible &&
          <div
              className='w-full h-full'
              style={{
                animation: !wasVisible ? `appear-from-below 500ms ease-in-out ${(initialVisibility ? index : 0) * 200}ms both` : undefined,
              }}
          >
              <div
                  className='bg-white shadow-primary-xl dark:shadow-none bg-white dark:bg-primary-dark border border-gray-200 dark:border-primary-border p-2 pb-0 rounded-2xl mx-auto min-w-[300px]'
                  style={{
                    cursor: open ? 'unset' : 'pointer',
                    height: open ? '100%' : '6.1rem',
                    width: '100%',
                    transition: 'height, width, background-color, border-color, box-shadow',
                    transitionDuration: '500ms, 500ms, 150ms, 105ms, 150ms',
                  }}
                  onClick={() => !dialogOpen && setDialogOpen(true)}
              >
                  <Tooltip
                      className='h-20 w-20 transition-colors bg-primary-light dark:bg-secondary rounded-xl absolute'
                      style={{
                        transition: 'margin-left 500ms, margin-top 500ms',
                      }}
                      label={
                        t('projects.type.title') +
                        ': ' +
                        types.map((type) =>
                          t('projects.type.' + type.toLowerCase())).join(', ')
                      }
                  >
                      <ProjectTypeIndicator types={types} />
                  </Tooltip>

                  <div
                      className='overflow-hidden h-full w-full mr-[-4rem]'
                  >
                      <button className={`float-right transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={() => setDialogOpen(false)}>
                          <CloseIcon />
                      </button>
                      <div
                          className='h-14 mb-10'
                      >
                          <div className={`w-full ml-24 transition-all duration-500 ${open ? 'mt-0' : 'mt-3'}`}>
                              <div
                                  className={`text-gray-800 dark:text-white whitespace-nowrap font-bold ${open ? 'text-xl md:text-3xl overflow-hidden' : 'text-md md:text-xl'}`}
                                  style={{
                                    transition: 'color, font-size',
                                    transitionDuration: '150ms, 500ms',
                                    width: open ? 'calc(100% - 30px - 6rem)' : 'unset',
                                  }}
                              >
                                {title}
                              </div>
                              <div className='scrollbar-light h-[2rem] overflow-x-auto overflow-y-hidden'
                                   style={{
                                     transition: 'margin-top 500ms, width 500ms',
                                     marginTop: open ? '0.25rem' : '-0.25rem',
                                     width: `calc(100% - ${open ? '6rem' : '5rem'}`
                                   }}
                                   onTouchStart={(event) => event.stopPropagation()}
                                   onTouchEnd={(event) => event.stopPropagation()}
                              >
                                {flags.map((flag) => (
                                    <Chip
                                      key={`project-${index}-flag-${flag}`}
                                      size={'small'}
                                      className={'mx-0.5'}
                                      color={theme === 'dark' ? 'secondary' : 'primary'}
                                    >
                                      {flag}
                                    </Chip>
                                  )
                                )}
                              </div>
                          </div>
                      </div>
                      <div className='px-4 overflow-y-auto scrollbar-light'
                           style={{
                             height: 'calc(100% - 3.5rem - 2.5rem - 1rem)'
                           }}
                      >
                        {children}
                      </div>
                  </div>
              </div>
          </div>
      }
    </AnimatedDialog>
  );
};

export default ProjectContainer;