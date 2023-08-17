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
    position: 'Web developper',
    personnal_projects: 'Projects',
    experiences: 'Experiences',
    educations: 'Educations/Degrees',
    ongoing: 'Ongoing',
    tech_stack: 'Tech stack',
    opensource: 'Opensource contributions',
    short_description:
      '18 years old web developper; Docker enjoyer; Open Source advocate',
  },
  fr: {
    title: 'Mon CV',
    contact_me: 'Contactez-moi',
    skills: 'Mes compétences',
    position: 'Développeur web',
    personnal_projects: 'Projets',
    experiences: 'Expériences',
    educations: 'Formations/Diplomes',
    ongoing: 'En cours',
    tech_stack: 'Stack technique',
    opensource: 'Contributions opensource',
    short_description:
      "Développeur web de 18 ans; Apprécie docker et l'open source",
  },
} as const;
