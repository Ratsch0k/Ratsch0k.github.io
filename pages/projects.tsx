import { useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    return (
       <div>
           {t('projects.title')}
       </div> 
    );
};

export default Projects;