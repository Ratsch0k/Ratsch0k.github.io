import React from 'react';
import {useTranslation} from 'react-i18next'
import {Skill} from './index';
import AcademicIcon from '../icons/AcademicIcon';

const ExperienceSkills = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('skills.experience.content')}
    </div>
  );
};

const experience: Skill = {
  name: 'skills.experience.title',
  icon: <AcademicIcon />,
  content: <ExperienceSkills />,
};

export default experience;