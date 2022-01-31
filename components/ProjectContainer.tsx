import {FC, MouseEventHandler, useCallback, useState} from 'react';
import CloseIcon from './icons/CloseIcon';
import tailwindConfig from './TailwindConfig';
import convert from 'color-convert';
import Chip from './Chip';
import ProjectTypeIndicator, {ProjectType} from './ProjectTypeIndicator';
import Tooltip from './Tooltip';
import {useTranslation} from 'react-i18next';

const primaryDark = convert.hex.rgb(tailwindConfig.theme.colors.primary.dark);

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
  animationIndex?: number;
  types: ProjectType[];
}

export const BASE_OFFSET = '7rem';
export const OFFSET = '7rem';

const ProjectContainer: FC<ProjectContainer> = (props) => {
  const {children, index, title, flags, scrollTop, animationIndex, types} = props;
  const [open, setOpen] = useState<boolean>(false);
  const [closing, setClosing] = useState<boolean>(false);
  const {t} = useTranslation();

  const handleClose: MouseEventHandler<HTMLButtonElement> = useCallback((event) => {
    event.stopPropagation();

    setClosing(true);
    setOpen(false);
    const timeout = setTimeout(() => {
      setClosing(false);
    }, 500);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  return (
    <div
      className='w-full absolute max-h-[80%]'
      style={{
        top: open ? `calc(${scrollTop}px + 6rem)` : `calc(${BASE_OFFSET} + ${index} * ${OFFSET})`,
        zIndex: open || closing ? 40 : 10,
        transition: 'top, height',
        height: open ? 'calc(100% - 12rem)' : '4rem',
        transitionDuration: '500ms, 500ms',
        animation: `appear-from-below 500ms ease-in-out ${(animationIndex || index) * 200}ms both`,
      }}
    >
      <div
        className='bg-primary-dark p-2 pb-0 rounded-xl mx-auto min-w-[300px]'
        style={{
          cursor: open ? 'unset' : 'pointer',
          height: open ? '100%' : '4rem',
          width: open ? 'calc(100% - 2rem)' : '65%',
          transition: 'height, width',
          transitionDuration: '500ms, 500ms',
          filter: `drop-shadow(0 0 0.2rem rgb(${primaryDark[0]}, ${primaryDark[1]}, ${primaryDark[2]}))`,
        }}
        onClick={() => setOpen((prev) => !prev ? true : prev)}
      >
        <Tooltip
          className='h-20 w-20 bg-secondary rounded-xl absolute mr-4'
          style={{
            marginLeft: open ? 0 : '-1rem',
            marginTop: open ? 0: '-1rem',
            transition: 'margin-left 500ms, margin-top 500ms',
            filter: `drop-shadow(0 0 0.4rem rgb(${primaryDark[0]}, ${primaryDark[1]}, ${primaryDark[2]}))`,
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
          <button className={`text-white float-right transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose}>
            <CloseIcon />
          </button>
          <div
            className='h-14 mb-10'
          >
            <div className={`transition-all duration-500 w-full ${open ? 'ml-24' : 'ml-20'}`}>
              <div
                className={`transition-all whitespace-nowrap duration-500 font-bold ${open ? 'text-xl md:text-3xl overflow-hidden' : 'text-md md:text-xl'}`}
                style={{
                  width: open ? 'calc(100% - 30px - 6rem)' : 'unset'
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
                    >
                      {flag}
                    </Chip>
                  )
                )}
              </div>
            </div>
          </div>
          <div className='px-2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;