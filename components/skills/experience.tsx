import React from 'react';
import {Trans, useTranslation} from 'react-i18next'
import {Skill} from './index';
import AcademicIcon from '../icons/AcademicIcon';
import TranslatedList from '../TranslatedList';

const ExperienceSkills = () => {
  const {t} = useTranslation();

  return (
    <>
      <Trans>
        {t('skills.experience.introduction')}
      </Trans>
      <Trans>
        {t('skills.experience.projectTopics.introduction')}
      </Trans>
      <br/>
      <TranslatedList translationKey={'skills.experience.projectTopics.topics'} htmlKey={'experience-project-topic'} />
      <br/>
      <br/>
      <Trans>
        {t('skills.experience.uniTopics.introduction')}
      </Trans>
      <TranslatedList translationKey={'skills.experience.uniTopics.topics'} htmlKey={'experience-uni-topic'} />
      <br/><br/>
      <Trans i18nKey='skills.experience.securityTopics.introduction' />
      <TranslatedList translationKey='skills.experience.securityTopics.topics' htmlKey='experience-security-topics'/>
    </>
  );
};

const experience: Skill = {
  name: 'skills.experience.title',
  icon: <AcademicIcon />,
  content: <ExperienceSkills />,
};

export default experience;