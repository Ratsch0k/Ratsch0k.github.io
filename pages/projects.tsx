import {PageComponent} from '../components/PageComponent';
import {useTranslation} from 'react-i18next';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import ProjectContainer, {OFFSET} from '../components/ProjectContainer';
import projects from '../components/projects';
import {createRef, useCallback, useEffect, useState} from 'react';


const Projects: PageComponent = (props) => {
  const {setScrollable} = props;
  const {t} = useTranslation();
  const contentRef = createRef<HTMLDivElement>();
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState<number | null>(null);
  const [maxElement, setMaxElement] = useState<number | null>(null);
  const [initialMaxElement, setInitialMaxElement] = useState<number | null>(null);
  const [border, setBorder] = useState(false);
  const [open, setOpen] = useState<number | null>(null);

  const handleSetOpen = useCallback((index: number, value: boolean) => {
    if (open !== null && open === index && !value) {
      setOpen(null);
    } else if (open === null && value) {
      setOpen(index);
    }
  }, [open]);

  useEffect(() => {
    if (height) {
      const max = Math.floor((height + top) / 112);
      setMaxElement((prev) => {
        if (prev !== null) {
          if (max > prev) {
            return max;
          } else {
            return prev;
          }
        } else {
          setInitialMaxElement(max);
          return max;
        }
      });
    }
  }, [top, height]);

  const scrollHandler: EventListener = useCallback((ev) => {
    const target = ev.target as HTMLDivElement | null;
    if (target !== null) {
      setTop(target.scrollTop);
    }
  }, []);

  useEffect(() => {
    if (contentRef.current !== null) {
      contentRef.current.addEventListener('scroll', scrollHandler);
      if (!height) {
        setHeight(contentRef.current.clientHeight);
      }

      if (contentRef.current.clientHeight < contentRef.current.scrollHeight) {
        setScrollable(true);
        setBorder(true);
      } else {
        setScrollable(false);
        setBorder(false);
      }
    }

    return () => {
      contentRef.current?.removeEventListener('scroll', scrollHandler);
    }
  }, [contentRef.current, maxElement]);

  return (
    <div className='relative h-full'>
      <PageTitle border={border}>
        {t('projects.title')}
      </PageTitle>
      <PageContent className='relative h-full' ref={contentRef}
      >
        <div
        style={{
          height: `calc((${OFFSET}) * ${Math.min(projects.length, maxElement || 0)} + 6rem)`,
        }}>
        {
          projects.map((project, index) => {
            const Project = project.content;

            if (maxElement && index < maxElement) {
              let animationIndex = undefined;
              if (initialMaxElement && initialMaxElement < maxElement) {
                animationIndex = 0;
              }

              return (
                <ProjectContainer
                  key={`project-${index}`}
                  index={index}
                  title={project.name}
                  flags={project.flags}
                  scrollTop={top}
                  animationIndex={animationIndex}
                  types={project.types}
                  open={open === index}
                  setOpen={(value) => handleSetOpen(index, value)}
                >
                  <Project />
                </ProjectContainer>
              );
            } else {
              return null;
            }
          })
        }
        </div>
      </PageContent>
    </div>
  );
};

export default Projects;