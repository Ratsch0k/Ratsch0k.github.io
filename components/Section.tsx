import {Trans, TransProps, useTranslation} from 'react-i18next';

export interface SectionProps {
  i18nKey: string;
  titleKey?: string;
  contentKey?: string;
  HeaderElement?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  components?: TransProps<never, never, never>['components'];
  noSpacing?: boolean;
}

const Section = (props: SectionProps) => {
  const {
    i18nKey,
    HeaderElement = 'h3',
    titleKey = 'title',
    contentKey = 'content',
    components,
    noSpacing,
  } = props;
  const {t} = useTranslation();
  
  return (
    <>
      <HeaderElement>
        {t(i18nKey + '.' + titleKey)}
      </HeaderElement>
      <Trans
        components={components}
      >
        {t(i18nKey + '.' + contentKey)}
      </Trans>
      {!noSpacing && <><br/><br/></>}
    </>
  )
};

export default Section;