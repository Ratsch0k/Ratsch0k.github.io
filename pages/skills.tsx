import {useTranslation} from 'react-i18next';
import PageTitle from '../components/page-title';
import {ReactElement, useEffect, useRef, useState} from 'react';
import CodeIcon from '../components/icons/code';
import InformationIcon from '../components/icons/information';
import CodingSkills from './skills/coding';
import GeneralSkills from './skills/general';
import AcademicIcon from '../components/icons/academic';
import TranslateIcon from '../components/icons/translate-icon';
import ExperienceSkills from './skills/experience';
import LanguagesSkills from './skills/languages';
import {PageComponent} from '../components/Page';

interface TopicContainerProps {
  title: string;
  icon?: ReactElement;
  pos: number;
}

const TopicContainerAlt: React.FC<TopicContainerProps> = ({children, title, icon, pos}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={`${pos > 0 && 'mt-16'} p-6 border rounded-md border-secondary flex flex-col justify-start items-center w-full ${pos % 2 === 1 ? 'sm:flex-row-reverse' : 'sm:flex-row'} bg-primary-dark`}
      style={{
        animation: `appear-from-below 500ms ease-in-out ${pos * 200}ms both`,
      }}
    >
      <div
        className='flex-grow-0 flex-shrink-0 mr-4 text-1xl text-secondary'
        style={{
          maxWidth: 200
        }}
      >
        <b>
          {title}
        </b>
      </div> 
      <div className='h-full'>
        <div className='bg-secondary w-full h-px left-0 mt-4 sm:w-px sm:h-full sm:mr-4 sm:left-auto sm:mt-0 sm:top-0 absolute' />
        <div className='justify-center flex items-center h-full'>
        <div
          className='bg-primary-dark p-1 text-secondary'
          style={{
            transform: 'translateX(-14px)'
          }}
        >
          {icon}
        </div>
        </div>
      </div>
      <div className='flex-1 p-2'>
        {children}
      </div>
    </div>
  );
};

// eslint-disable-next-line
const TopicContainer: React.FC<TopicContainerProps> = ({children, title, icon}) => {
  const [open, setOpen] = useState<boolean>(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.clientHeight + contentRef.current.scrollHeight);
    }
  }, [contentRef]);

  useEffect(() => {
    console.log(contentHeight);
  }, [contentHeight]);

  return (
    <div
      className='bg-primary-dark rounded-md shadow-lg transition hover:shadow-xl p-2 w-full m-2'
      style={{
        transition: 'all 150ms'
      }}
    >
      <button
        className='text-lg font-bold w-full text-left'
        onClick={() => setOpen((prev) => !prev)}
      >
        <div className='flex flex-row justify-start items-center'>
          {icon}
          <div className='pl-2'>
            {title} 
          </div>
        </div>
      </button>
      <div
        className='overflow-hidden'
        style={{
          transition: 'height 150ms',
          height: open ? `${contentHeight}px` : '0px',
        }}
        ref={contentRef}
      >
        <div className='pt-2'>
          {children}
        </div>
      </div> 
    </div>
  );
};

export const SkillsPage: PageComponent = ({setScrollable}) => {
  const {t} = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [border, setBorder] = useState<boolean>(false);

  useEffect(() => {
    if (contentRef.current !== null) {
      const windowHeight = window.innerHeight;
      const componentHeight = contentRef.current?.scrollHeight;

      console.log(`window: ${windowHeight} | component: ${componentHeight}`)

      if (componentHeight && componentHeight > windowHeight) {
        setScrollable(true);
        setBorder(true);
      }
    }

    return () => {
      setScrollable(false);
    }
  }, [contentRef.current]);

  return (
    <div className='h-full flex flex-col'>
      <PageTitle border={border}>
        {t('skills.title')}
      </PageTitle>
        <div className='h-full overflow-auto pt-20 pb-12 md:pt-24 max-w-4xl mx-auto'>
          <div
            className='flex flex-col p-8 pt-0 items-center justify-center w-full'
            ref={(ref) => contentRef.current = ref}
          >
            <TopicContainerAlt pos={0} icon={<InformationIcon />} title={t('skills.general.title')}>
              <GeneralSkills /> 
            </TopicContainerAlt>
            <TopicContainerAlt pos={1} icon={<CodeIcon />} title={t('skills.coding.title')}>
              <CodingSkills /> 
            </TopicContainerAlt>
            <TopicContainerAlt pos={2} icon={<AcademicIcon />} title={t('skills.experience.title')}>
              <ExperienceSkills />
            </TopicContainerAlt>
            <TopicContainerAlt pos={3} icon={<TranslateIcon />} title={t('skills.languages.title')}>
              <LanguagesSkills />
            </TopicContainerAlt>
          </div>
        </div>
    </div>
  );
};

export default SkillsPage;