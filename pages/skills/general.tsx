import { useTranslation } from "react-i18next";

const GeneralSkills = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t('skills.general.content')}
    </div>
  );
};

export default GeneralSkills;