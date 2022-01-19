import {NextPage} from 'next';
import {useCallback, useRef, useState} from 'react';
import TranslateIcon from './icons/translate-icon';
import ClickAwayListener from 'react-click-away-listener';
import {useTranslation} from 'react-i18next';
import IconButton from './icon-button';

interface LanguageItemProps {
    onClick(): void;
    selected: boolean;
}

const LanguageItem: NextPage<LanguageItemProps> = ({children, onClick, selected}) => {
    return (
        <li
            onClick={onClick}
            className={`transition-colors p-2 cursor-pointer hover:text-white hover:bg-primary-dark rounded-md ${selected ? 'border-primary border' : ''}`}
        >
            {children}
        </li>
    );
}

const LanguageSwitch = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {i18n} = useTranslation();
    const popUpRef = useRef<HTMLDivElement>(null);

    const closePopup = useCallback(() => {
        setOpen(false);

        if (popUpRef.current) {
            setTimeout(() => {
                if (popUpRef.current) {
                    popUpRef.current.style.display = 'none'
                }
            }, 100);
        }
    }, [popUpRef.current]);

    const openPopup = useCallback(() => {
        setOpen(true);
        if (popUpRef.current) {
            popUpRef.current.style.display = 'unset';
        }
    }, [popUpRef.current])

    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        closePopup();
    }, [i18n]);

    return (
        <div className='flex md:flex-col flex-col-reverse items-end'>
            <IconButton
                onClick={() => open ? closePopup() : openPopup()} 
                className='p-2 m-2 rounded-lg bg-primary border border-white'
            >
                <TranslateIcon/>
            </IconButton>
            <ClickAwayListener onClickAway={() => open && closePopup()}>
                <div ref={popUpRef} className={`transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>
                    <div className='rounded-lg shadow-xl bg-primary-light p-2'>
                        <ol>
                            <LanguageItem
                                onClick={() => changeLanguage('en')}
                                selected={i18n.language === 'en'}
                            >
                                English
                            </LanguageItem>
                            <LanguageItem
                                onClick={() => changeLanguage('de')}
                                selected={i18n.language === 'de'}
                            >
                                Deutsch
                            </LanguageItem>
                        </ol>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
    );
};

export default LanguageSwitch;