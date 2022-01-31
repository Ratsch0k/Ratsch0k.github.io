import React from 'react';
import {useTranslation} from 'react-i18next'
import {Skill} from './index';
import TranslateIcon from '../icons/TranslateIcon';

const LanguagesSkills = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('skills.languages.content')}
    </div>
  );
};

const languages: Skill = {
  name: 'skills.languages.title',
  icon: <TranslateIcon />,
  content: <LanguagesSkills />,
};

export default languages;