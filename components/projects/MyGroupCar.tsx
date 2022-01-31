import {Project} from './index';

const MyGroupCarProject = () => {
  return (
    <div>
      My Group Car Project
    </div>
  )
};

export const myGroupCar: Project = {
  name: 'My Group Car',
  flags: ['Typescript', 'ReactJS', 'NodeJS', 'ExpressJS', 'Postgresql', 'REST'],
  content: MyGroupCarProject,
  types: ['Website', 'Server'],
};