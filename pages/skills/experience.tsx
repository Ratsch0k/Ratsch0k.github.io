import { useTranslation } from "react-i18next"

const ExperienceSkills = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('skills.experience.content')}
    </div>
  );
};

export default ExperienceSkills;