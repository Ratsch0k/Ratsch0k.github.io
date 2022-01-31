import {Project} from './index';

export const NoronaProject = () => {
  return (
    <div>
      Project about making a Corona App
    </div>
  );
};

export const norona: Project = {
  name: 'Norona',
  flags: ['Typescript', 'ExpressJS', 'NodeJS', 'Flutter', 'Dart', 'GraphQL', 'MongoDB'],
  content: NoronaProject,
  types: ['App', 'Server'],
};