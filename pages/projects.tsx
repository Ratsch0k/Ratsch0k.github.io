import {PageComponent} from '../components/PageComponent';
import PageContent from '../components/PageContent';
import ProjectContainer from '../components/ProjectContainer';
import projects from '../components/projects';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/dist/client/router';


const Projects: PageComponent = (props) => {
  const {setScrollable} = props;
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [top, setTop] = useState(0);
  const [height, setHeight] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const router = useRouter();

  const handleSetOpen = useCallback((index: number, value: boolean) => {
    if (open !== null && open === index && !value) {
      setOpen(null);
      router.push('/projects');
    } else if (open === null && value) {
      setOpen(index);
      router.push('/projects/' + projects[index].name)
    }
  }, [open]);

  useEffect(() => {
    const name = router.asPath.replace('/projects/', '');

    let index: number | null = null;
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];

      if (project.name === decodeURI(name)) {
        index = i;
        break;
      }
    }

    if (index !== null && index !== open) {
      setOpen(index);
    }
  }, [router.asPath])

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
      <PageContent className='relative h-full' ref={contentRef} id='projects-page'
      >
        <div className='flex flex-col space-y-10 items-center mb-20'>
        {
          projects.map((project, index) => {

            return (
              <ProjectContainer
                key={`project-${index}`}
                index={index}
                scrollTop={top}
                project={project}
                open={open === index}
                setOpen={(value) => handleSetOpen(index, value)}
                scrollRef={contentRef}
              />
            );
          })
        }
        </div>
      </PageContent>
    </div>
  );
};

export default Projects;