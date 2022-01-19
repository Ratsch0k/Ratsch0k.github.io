import React from 'react';
import {useTranslation} from 'react-i18next'

const LanguagesSkills = () => {
  const {t} = useTranslation();

  return (
    <div>
      {t('skills.languages.content')}
    </div>
  );
};

export default LanguagesSkills;