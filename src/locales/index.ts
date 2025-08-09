import { en } from './en';
import { zh } from './zh';
import type { Language } from '../contexts/LanguageContext';

export const translations = {
  en,
  zh,
};

export type TranslationKey = keyof typeof en;

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let current: any = translations[language];
  
  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation key "${key}" not found for language "${language}"`);
      return key;
    }
    current = current[k];
  }
  
  return typeof current === 'string' ? current : key;
};

export { en, zh };
