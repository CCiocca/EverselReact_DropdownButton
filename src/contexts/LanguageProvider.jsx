import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { expireOptions } from '../utils/constants/expireOptions';

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const cookieLanguage = Cookies.get('language');
        return !cookieLanguage || cookieLanguage.toLowerCase == 'italiano' ? 'it-IT' : cookieLanguage
    })
    useEffect(() => {
        Cookies.set('language', language, { expires: expireOptions }); 
    }, [language]);

    const changeLanguage = (lang) => {
        setLanguage(lang);
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext, LanguageProvider };