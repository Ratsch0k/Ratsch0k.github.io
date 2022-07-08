import {useTranslation} from 'react-i18next';
import PageContent from '../components/PageContent';
import {useCallback, useEffect, useState} from 'react';
import Imprint from '../components/Imprint';
import Button from '../components/Button';
import PrivacyPolicy from '../components/PrivacyPolicy';
import {useRouter} from 'next/dist/client/router';

enum Dialog {
  IMPRINT = 'imprint',
  PRIVACY_POLICY = 'privacy-policy',
}

const Legal = () => {
  const {t} = useTranslation();
  const [openedDialog, setOpenedDialog] = useState<Dialog | null>(null);
  const router = useRouter();
  const closeDialog = useCallback(() => {
    router.push('/legal');
    setOpenedDialog(null);
  }, []);

  const handleOpenDialog = useCallback((dialog: Dialog) => {
    router.push('/legal/' + dialog);
    setOpenedDialog(dialog);
  }, [router]);

  const createDialogHandler = useCallback((dialog: Dialog) => {
    return () => handleOpenDialog(dialog);
  }, [handleOpenDialog]);

  useEffect(() => {
    const dialogInPath = router.asPath.replace('/legal/', '');

    switch(dialogInPath) {
      case Dialog.IMPRINT: setOpenedDialog(Dialog.IMPRINT); break;
      case Dialog.PRIVACY_POLICY: setOpenedDialog(Dialog.PRIVACY_POLICY); break;
    }
  }, [router.asPath])

  return (
    <div>
      <PageContent id='legal-page'>
        <div className='flex flex-col justify-center m-auto max-w-xs items-stretch space-y-2'>
          <Button fullWidth onClick={createDialogHandler(Dialog.IMPRINT)}>
            {t('imprint.title')}
          </Button>
          <Button fullWidth onClick={createDialogHandler(Dialog.PRIVACY_POLICY)}>
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