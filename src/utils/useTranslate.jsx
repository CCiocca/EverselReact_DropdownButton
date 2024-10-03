import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageProvider';
import { TRANSLATION } from './constants/translation';

function useTranslate() {
    const { language } = useContext(LanguageContext); 

    function translate(input) {
        try {
            const output = TRANSLATION[language][input]; 
            return typeof output === 'undefined' ? input : output;
        } catch (err) {
            return input;
        }
    }
    return translate;
}

export default useTranslate;
