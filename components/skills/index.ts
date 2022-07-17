import coding from './coding';
import experience from './experience';
import general from './general';
import languages from './languages';

export interface Skill {
  name: string;
  icon: JSX.Element;
  content: JSX.Element;
}

const skills = [
  general,
  experience,
  languages,
  coding,
];

export default skills;