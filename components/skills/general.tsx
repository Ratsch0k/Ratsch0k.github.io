import React from 'react';
import {Trans, useTranslation} from 'react-i18next';
import {Skill} from './index';
import InformationIcon from '../icons/InformationIcon';

const GeneralSkills = () => {
  const {t} = useTranslation();
  return (
    <div>
      <Trans>{t('skills.general.content')}</Trans>
    </div>
  );
};

const general: Skill = {
  name: 'skills.general.title',
  icon: <InformationIcon />,
  content: <GeneralSkills />,
};

export default general;