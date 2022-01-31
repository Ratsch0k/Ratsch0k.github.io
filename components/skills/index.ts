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
  coding,
  experience,
  languages,
];

export default skills;