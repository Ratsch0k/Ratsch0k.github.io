import {useTranslation} from 'react-i18next';
import PageTitle from '../components/PageTitle';
import {useEffect, useRef, useState} from 'react';
import {PageComponent} from '../components/PageComponent';
import PageContent from '../components/PageContent';
import SkillContainer from '../components/SkillContainer';
import skills from '../components/skills';


export const Skills: PageComponent = ({setScrollable}) => {
  const {t} = useTranslation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [border, setBorder] = useState<boolean>(false);

  /*
   * Check size of content and set border of header / footer appropriately
   */
  useEffect(() => {
    if (contentRef.current !== null) {
      const windowHeight = window.innerHeight;
      const componentHeight = contentRef.current?.scrollHeight;

      if (componentHeight && componentHeight > windowHeight) {
        setScrollable(true);
        setBorder(true);
      } else {
        setScrollable(false);
        setBorder(false);
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
      <PageContent>
        <div
          className='flex flex-col p-8 pt-0 items-center justify-center w-full mb-16'
          ref={(ref) => contentRef.current = ref}
        >
          {
            skills.map((skill, index) => (
              <SkillContainer key={`skill-${index}`} pos={index} icon={skill.icon} title={t(skill.name)}>
                {skill.content}
              </SkillContainer>
            ))
          }
        </div>
      </PageContent>
    </div>
  );
};

export default Skills;