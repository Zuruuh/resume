import { resume, defaultLang } from './resume';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in resume) return lang as keyof typeof resume;

  return defaultLang;
}

export function useTranslations(lang: keyof typeof resume) {
  return function t(key: keyof (typeof resume)[typeof defaultLang]) {
    return resume[lang][key] || resume[defaultLang][key];
  };
}
