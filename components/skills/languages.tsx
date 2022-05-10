import React from 'react';
import {Trans, useTranslation} from 'react-i18next'
import {Skill} from './index';
import TranslateIcon from '../icons/TranslateIcon';

const LanguagesSkills = () => {
  const {t} = useTranslation();

  return (
    <Trans>
      {t('skills.languages.content')}
    </Trans>
  );
};

const languages: Skill = {
  name: 'skills.languages.title',
  icon: <TranslateIcon />,
  content: <LanguagesSkills />,
};

export default languages;