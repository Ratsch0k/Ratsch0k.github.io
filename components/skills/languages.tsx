import React from 'react';
import {Trans} from 'react-i18next'
import {Skill} from './index';
import TranslateIcon from '../icons/TranslateIcon';

const LanguagesSkills = () => {
  return (
    <Trans i18nKey='skills.languages.content'/>
  );
};

const languages: Skill = {
  name: 'skills.languages.title',
  icon: <TranslateIcon />,
  content: <LanguagesSkills />,
};

export default languages;