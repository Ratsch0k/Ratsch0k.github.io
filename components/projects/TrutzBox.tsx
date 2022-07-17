import {Project} from './index';
import Section from '../Section';

const TrutzBoxProject = () => {
  return (
      <>
        <Section i18nKey='projects.trutzbox.description'/>
      </>
  );
};

const trutzBox: Project = {
  name: 'TrutzBox (Comidio GmbH)',
  flags: ['Typescript', 'ReactJS'],
  content: TrutzBoxProject,
  types: ['Website'],
};

export default trutzBox;