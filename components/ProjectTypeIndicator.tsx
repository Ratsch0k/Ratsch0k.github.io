import AppIcon from './icons/AppIcon';
import WebsiteIcon from './icons/WebsiteIcon';
import ServerIcon from './icons/ServerIcon';

const projectTypes = [
  'App',
  'Website',
  'Server',
  'Program', // Not used for now
] as const;

export type ProjectType = typeof projectTypes[number];

export interface ProjectTypeIndicatorProps {
  types: ProjectType[];
}

const active = 'transition-colors text-primary-contrast dark:text-secondary-contrast';
const inactive = 'transition-colors text-primary-dark dark:text-secondary-dark';

const ProjectTypeIndicator = (props: ProjectTypeIndicatorProps) => {
  const {types} = props;

  return (
    <div>
      <div className='mt-1 flex items-center justify-center w-full'>
        <ServerIcon size='large' className={types.includes('Server') ? active : inactive} />
      </div>
      <div className='w-full flex ml-1 mt-1'>
        <div className='mr-1'>
          <AppIcon size='large' className={types.includes('App') ? active : inactive} />
        </div>
        <WebsiteIcon size='large' className={types.includes('Website') ? active : inactive} />
      </div>
    </div>
  );
};

export default ProjectTypeIndicator;