import {NextPage} from 'next';
import {useCallback, useRef, useState} from 'react';
import TranslateIcon from './icons/TranslateIcon';
import ClickAwayListener from 'react-click-away-listener';
import {useTranslation} from 'react-i18next';
import IconButton from './IconButton';

interface LanguageItemProps {
    onClick(): void;
    selected: boolean;
}

const LanguageItem: NextPage<LanguageItemProps> = ({children, onClick, selected}) => {
    return (
        <div
            onClick={onClick}
            className={`transition-colors p-2 cursor-pointer hover:text-white hover:bg-primary dark:hover:bg-primary-dark rounded-md ${selected ? 'border-primary border' : ''}`}
        >
            {children}
        </div>
    );
}

const LanguageSwitch = () => {
    const [open, setOpen] = useState<boolean>(false);
    const {i18n} = useTranslation();
    const popUpRef = useRef<HTMLDivElement>(null);
    const anchorRef = useRef<HTMLButtonElement | null>(null);
    const {t} = useTranslation();

    const closePopup = useCallback(() => {
        setOpen(false);

        if (popUpRef.current) {
            popUpRef.current.style.opacity = '0';
            setTimeout(() => {
                if (popUpRef.current) {
                    popUpRef.current.style.display = 'none'
                }
            }, 100);
        }
    }, [popUpRef.current]);

    const openPopup = useCallback(() => {
        setOpen(true);
        if (popUpRef.current && anchorRef.current) {
            // First make element visible so that it will get rendered and `getBoundingClientRect` can return meaningful data
            popUpRef.current.style.display = 'unset';
            getComputedStyle(popUpRef.current);

            // Set position of element
            const popupRect = popUpRef.current.getBoundingClientRect();
            const anchorRect = anchorRef.current.getBoundingClientRect();
            const Y = - popupRect.height;
            const X = - popupRect.width + anchorRect.width;
            popUpRef.current.style.transform = `translate(${X}px, ${Y}px)`;

            popUpRef.current.style.opacity = '1';
        }
    }, [popUpRef.current])

    const changeLanguage = useCallback((lng: string) => {
        i18n.changeLanguage(lng);
        closePopup();
    }, [i18n]);

    return (
        <div>
            <ClickAwayListener onClickAway={() => open && closePopup()}>
                <div ref={popUpRef} className='absolute transition-opacity hidden opacity-0'>
                    <div
                      className='rounded-lg text-primary mb-2 shadow-primary-xl border border-gray-200 dark:border-primary-lightest bg-white dark:bg-primary-lightest p-2'
                      style={{
                          transition: 'box-shadow 150ms, border-color 150ms, background-color 150ms'
                      }}
                    >
                        <div className='flex flex-col space-y-2'>
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
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
            <IconButton
                onClick={() => open ? closePopup() : openPopup()}
                className='p-2 rounded-lg'
                ref={anchorRef}
                tooltipProps={{
                    position: 'top',
                }}
                tooltip={!open ? t('changeLanguage') : undefined}
            >
                <TranslateIcon/>
            </IconButton>
        </div>
    );
};

export default LanguageSwitch;