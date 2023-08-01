import { resume, defaultLang } from './resume';

export type Lang = keyof typeof resume;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in resume) return lang as Lang;

  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof resume)[typeof defaultLang]) {
    return resume[lang][key] || resume[defaultLang][key];
  };
}
