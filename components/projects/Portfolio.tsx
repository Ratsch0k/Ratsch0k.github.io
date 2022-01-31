import {Project} from './index';

const PortfolioProject = () => {
  return (
    <div>
      This website
    </div>
  );
};

const portfolio: Project = {
  name: 'Portfolio',
  flags: ['Typescript', 'ReactJS', 'NextJS'],
  content: PortfolioProject,
  types: ['Website'],
}

export default portfolio;