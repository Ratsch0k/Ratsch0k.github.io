import {Project} from './index';
import Section from '../Section';

export const NoronaProject = () => {
  return (
      <>
        <Section i18nKey='projects.norona.description' />
        <Section i18nKey='projects.norona.tracing' />
        <Section i18nKey='projects.norona.maps' />
        <Section i18nKey='projects.norona.giveAndReceive' />
        <Section i18nKey='projects.norona.maps' />
        <Section i18nKey='projects.norona.technologies'/>
      </>
  );
};

export const norona: Project = {
  name: 'Norona',
  flags: ['Typescript', 'ExpressJS', 'NodeJS', 'Flutter', 'Dart', 'GraphQL', 'MongoDB'],
  content: NoronaProject,
  types: ['App', 'Server'],
};