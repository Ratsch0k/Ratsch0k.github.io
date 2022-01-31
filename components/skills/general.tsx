import React from 'react';
import {useTranslation} from 'react-i18next';
import {Skill} from './index';
import InformationIcon from '../icons/InformationIcon';

const GeneralSkills = () => {
  const {t} = useTranslation();
  return (
    <div>
      {t('skills.general.content')}
    </div>
  );
};

const general: Skill = {
  name: 'skills.general.title',
  icon: <InformationIcon />,
  content: <GeneralSkills />,
};

export default general;