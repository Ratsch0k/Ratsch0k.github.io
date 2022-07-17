import {ComponentPropsWithoutRef} from 'react';
import {useTranslation} from 'react-i18next';
import {TOptions} from 'i18next';

export interface TranslatedListProps extends ComponentPropsWithoutRef<'ul'> {
  translationKey: string;
  htmlKey: string;
}

const TranslatedList = (props: TranslatedListProps) => {
  const {htmlKey, translationKey, className, ...rest} = props;
  const {t} = useTranslation();

  return (
    <ul className={`list-disc ml-8 ${className ? className : ''}`} {...rest}>
      {
        (t(translationKey, {returnObjects: true, joinArrays: false} as unknown as TOptions) as unknown as string[]).map((item) => {
          return (
            <li key={`${htmlKey}-${item}`}>
              {item}
            </li>
          );
        })
      }
    </ul>
  );
};

export default TranslatedList;