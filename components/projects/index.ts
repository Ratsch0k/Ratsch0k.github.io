import {ProjectFlag} from '../ProjectContainer';
import {norona} from './Norona';
import {myGroupCar} from './MyGroupCar';
import pythonWebIDE from './PythonWebIDE';
import portfolio from './Portfolio';
import trutzBox from './TrutzBox';
import {ProjectType} from '../ProjectTypeIndicator';


export interface Project {
  name: string;
  flags: ProjectFlag[];
  content: () => JSX.Element;
  types: ProjectType[];
}

const projects: Project[] = [
  portfolio,
  myGroupCar,
  trutzBox,
  norona,
  pythonWebIDE,
];

export default projects;