import { NextPage } from 'next';
import { DocumentProps } from 'next/document';
import React, { useCallback, useState } from 'react';
import TranslateIcon from './icons/translate-icon';
import ClickAwayListener from 'react-click-away-listener';
import { useTranslation } from 'react-i18next';

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

    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        setOpen(false);
    }, [i18n]);

    return (
        <div className='flex md:flex-col flex-col-reverse items-end'>
            <button
                onClick={() => setOpen((prev) => !prev)} 
                className='transition-colors p-2 m-2 rounded hover:bg-primary-dark hover:text-white'
            >
                <TranslateIcon/>
            </button>
            <ClickAwayListener onClickAway={() => open && setOpen(false)}>
                <div className={`transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`}>
                    <div className=' rounded-lg shadow-xl bg-primary-light p-2'>
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