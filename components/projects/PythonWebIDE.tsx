import {Project} from './index';
import Section from '../Section';
import Link from '../Link';

const PythonWebIDEProject = () => {
  return (
    <>
      <Section
          components={
          [
              <Link
                  key='link-eta-fabric'
                  href='https://www.bauing.tu-darmstadt.de/forschung_bau_umwelt/forschungsprojekte_4/abgeschlossen/eta_fabrik_1/index.en.jsp'
              >
                ETA-Fabrik
              </Link>,
              <Link
                  key='link-matplotlib'
                  href='https://matplotlib.org/'
              >
                Matplotlib
              </Link>
          ]}
          i18nKey='projects.webide.description'
      />
      <Section i18nKey='projects.webide.functionalities'/>
      <Section
          components={[
              <Link
                  key='link-spring-boot'
                  href='https://spring.io/projects/spring-boot'
              >
                Spring Boot
              </Link>
          ]}
          i18nKey='projects.webide.technologies'
      />
    </>
  );
};

const pythonWebIDE: Project = {
  name: 'Python Web IDE',
  flags: ['Java', 'Spring', 'Angular'],
  content: PythonWebIDEProject,
  types: ['Website', 'Server'],
};

export default pythonWebIDE;