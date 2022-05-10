import {PageComponent} from '../components/PageComponent';
import PageContent from '../components/PageContent';
import ProjectContainer from '../components/ProjectContainer';
import projects from '../components/projects';
import {useCallback, useEffect, useRef, useState} from 'react';


const Projects: PageComponent = (props) => {
  const {setScrollable} = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  const handleSetOpen = useCallback((index: number, value: boolean) => {
    if (open !== null && open === index && !value) {
      setOpen(null);
    } else if (open === null && value) {
      setOpen(index);
    }
  }, [open]);

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
      } else {
        setScrollable(false);
      }
    }

    return () => {
      contentRef.current?.removeEventListener('scroll', scrollHandler);
    }
  }, [contentRef.current]);

  return (
    <div className='relative h-full'>
      <PageContent className='relative h-full' ref={contentRef}
      >
        <div className='flex flex-col space-y-10 items-center mb-20'>
        {
          projects.map((project, index) => {
            const Project = project.content;

            return (
              <ProjectContainer
                key={`project-${index}`}
                index={index}
                title={project.name}
                flags={project.flags}
                scrollTop={top}
                types={project.types}
                open={open === index}
                setOpen={(value) => handleSetOpen(index, value)}
                scrollRef={contentRef}
              >
                <Project />
              </ProjectContainer>
            );
          })
        }
        </div>
      </PageContent>
    </div>
  );
};

export default Projects;