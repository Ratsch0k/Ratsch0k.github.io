import { useTranslation } from "react-i18next";

function Block() {
  return (
    <div
      className="bg-white inline-block h-full ml-2 mr-2 align-middle"
      style={{
        width: '20%',
        height: '0.25rem'
      }}
    ></div>
  )
}

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="h-full">
      <div className="text-4xl w-full text-center md:text-6xl pt-4 absolute">
        <Block />
        <span>{t('aboutme.title')}</span>
        <Block />
      </div>
    </div>
  );
};

export default AboutMe;
