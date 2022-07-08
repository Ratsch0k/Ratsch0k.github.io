import Dialog, {DialogProps} from './Dialog';
import DialogTitle from './DialogTitle';
import {useTranslation} from 'react-i18next';

export interface ImprintProps extends  DialogProps {
  close(): void;
}

const Imprint = (props: ImprintProps) => {
  const {close, ...rest} = props;
  const {t} = useTranslation();

  return (
    <Dialog {...rest}>
      <DialogTitle close={close}>
        {t('imprint.title')}
      </DialogTitle>
      Simon Lukas Kurz<br/>
      Kornweg, 1A<br/>
      64291 Darmstadt<br/>

      <br/>

      <h3 className='text-xl font-bold'>
        {t('imprint.contact')}
      </h3>
      {t('imprint.phone')}: +49 06151 2739858<br/>
      {t('imprint.telefax')}: +49 06151 2739858<br/>
      {t('imprint.mail')}: simon.kurz@rocketmail.com<br/>
    </Dialog>
  );
}

export default Imprint;