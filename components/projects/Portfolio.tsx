import {Project} from './index';
import {Trans, useTranslation} from 'react-i18next';
import Link from '../Link';

const PortfolioProject = () => {
  const {t} = useTranslation();
  
  return (
    <>
      <h3>{t('projects.portfolio.intro.title')}</h3>
      <Trans i18nKey={'projects.portfolio.intro.content'}/>
      <br/><br/>
      <h3>{t('projects.portfolio.structure.title')}</h3>
      <Trans
        components={[
          <Link key='link-digitalocean' href='https://digitalocean.com'>TEST</Link>,
          <Link key='link-nginx' href='https://nginx.org/en/'>TEST</Link>
        ]}
        i18nKey={'projects.portfolio.structure.content'}
      />
    </>
  );
};

const portfolio: Project = {
  name: 'Portfolio',
  flags: ['Typescript', 'ReactJS', 'NextJS'],
  content: PortfolioProject,
  types: ['Website'],
}

export default portfolio;