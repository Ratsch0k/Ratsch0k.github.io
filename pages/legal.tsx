import {useTranslation} from 'react-i18next';
import PageContent from '../components/PageContent';
import {useCallback, useState} from 'react';
import Imprint from '../components/Imprint';
import Button from '../components/Button';
import PrivacyPolicy from '../components/PrivacyPolicy';

enum Dialog {
  IMPRINT,
  PRIVACY_POLICY
}

const Legal = () => {
  const {t} = useTranslation();
  const [openedDialog, setOpenedDialog] = useState<Dialog | null>(null);
  const closeDialog = useCallback(() => {
    setOpenedDialog(null);
  }, []);

  return (
    <div>
      <PageContent>
        <div className='flex flex-col justify-center m-auto max-w-xs items-stretch space-y-2'>
          <Button fullWidth onClick={() => setOpenedDialog(Dialog.IMPRINT)}>
            {t('imprint.title')}
          </Button>
          <Button fullWidth onClick={() => setOpenedDialog(Dialog.PRIVACY_POLICY)}>
            {t('privacyPolicy.title')}
          </Button>
        </div>
      </PageContent>
      <Imprint open={openedDialog === Dialog.IMPRINT} close={closeDialog} />
      <PrivacyPolicy open={openedDialog === Dialog.PRIVACY_POLICY} close={closeDialog} />
    </div>
  );
};

export default Legal;