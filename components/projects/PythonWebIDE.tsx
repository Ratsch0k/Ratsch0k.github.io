import {Project} from './index';

const PythonWebIDEProject = () => {
  return (
    <div>
      Web IDE to develop and execute python scripts.
    </div>
  );
};

const pythonWebIDE: Project = {
  name: 'Python Web IDE',
  flags: ['Java', 'Spring', 'Angular'],
  content: PythonWebIDEProject,
  types: ['Website', 'Server'],
};

export default pythonWebIDE;