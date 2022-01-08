import { Trans, useTranslation } from "react-i18next";
import PageTitle from "../components/page-title";
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import CodeIcon from "../components/icons/code";
import InformationIcon from "../components/icons/information";
import CodingSkills from "./skills/coding";
import GeneralSkills from "./skills/general";
import AcademicIcon from "../components/icons/academic";
import TranslateIcon from "../components/icons/translate-icon";
import ExperienceSkills from "./skills/experience";
import LanguagesSkills from "./skills/languages";

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
      className={`mt-32 flex justify-start items-center w-full ${pos % 2 === 1 ? 'flex-row-reverse' : 'flex-row'}`}
      style={{
        animation: `appear-from-below 500ms ease-in-out ${pos * 200}ms both`,
      }}
    >
      <div
        className='flex-grow-0 flex-shrink-0 mr-4 text-2xl'
        style={{
          maxWidth: 200
        }}
      >
        {title} 
      </div> 
      <div className='h-full'>
        <div className='bg-white w-1 h-full mr-4' />
        <div
          className='relative bg-primary p-1'
          style={{
            transform: `translate(-14px, -${ref.current ? ref.current.clientHeight / 2 + 16: 14}px)`
          }}
        >
          {icon}
        </div>
      </div>
      <div className='flex-1 p-2'>
        {children}
      </div>
    </div>
  );
};

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

export const SkillsPage = () => {
  const { t } = useTranslation();
  return (
    <div className='h-full flex flex-col'>
      <PageTitle>
        {t('skill.title')}
      </PageTitle>
      <div className='flex justify-center items-center overflow-y-auto w-full'>
        <div className='flex self-center items-stretch w-full max-w-3xl'>
          <div
            className='flex flex-col p-8 items-center justify-center w-full'
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
    </div>
  );
};

export default SkillsPage;