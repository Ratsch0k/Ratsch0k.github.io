import {Project} from './index';
import Link from '../Link';
import Section from '../Section';

const MyGroupCarProject = () => {

  return (
    <>
      <Section i18nKey='projects.groupcar.intro' />
      <Section
        i18nKey='projects.groupcar.technologies'
        contentKey='introduction'
        noSpacing
       components={[
         <Link key='link-reactjs' href='https://reactjs.org/'/>,
         <Link key='link-expressjs' href='https://expressjs.com/'/>,
       ]}
      />
      <Section i18nKey='projects.groupcar.technologies.frontend' HeaderElement='h4' />
      <Section i18nKey='projects.groupcar.technologies.backend' HeaderElement='h4' />
      <Section
        i18nKey={'projects.groupcar.structure'}
        noSpacing
      />
    </>
  )
};

export const myGroupCar: Project = {
  name: 'My Group Car',
  flags: ['Typescript', 'ReactJS', 'NodeJS', 'ExpressJS', 'Postgresql', 'REST'],
  content: MyGroupCarProject,
  types: ['Website', 'Server'],
};