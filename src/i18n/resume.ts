export const languages = {
  en: 'English',
  fr: 'Français',
};

export const defaultLang = 'fr';

export const resume = {
  en: {
    title: 'My Resume',
    contact_me: 'Contact me',
    skills: 'My skills',
    languages: 'Languages',
    position: 'Fullstack web developper',
    personnal_projects: 'Personnal projects',
    experiences: 'Professionnal experiences',
    educations: 'Educations/Degrees',
  },
  fr: {
    title: 'Mon CV',
    contact_me: 'Contactez-moi',
    skills: 'Mes compétences',
    languages: 'Langues',
    position: 'Développeur web fullstack',
    personnal_projects: 'Projects personnels',
    experiences: 'Expériences professionnelles',
    educations: 'Formations/Diplomes',
  },
} as const;
