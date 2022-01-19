import {useTranslation} from 'react-i18next';
import {PageComponent} from '../components/Page';

const Projects: PageComponent = () => {
    const {t} = useTranslation();

    return (
       <div>
           {t('projects.title')}
       </div> 
    );
};

export default Projects;