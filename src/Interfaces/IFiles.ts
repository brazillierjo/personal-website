export type Generics = {
    [key: string]: {
        [key: string]: string;
    };
};

export type AboutMeItem = {
    isInReadMore: boolean;
    emoji: string;
    text: string;
};

export type EducationItem = {
    company: string;
    title: string;
    years: string;
    mainTech: string[];
    technologies: never[];
};

export type ExperienceItem = {
    company: string;
    title: string;
    years: string;
    mainTech: string[];
    technologies: string[];
};

export type ProjectItem = {
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url?: string;
    technologies: {
        class: string;
        name: string;
    }[];
};

export type ContactPage = {
    title: string;
    description: string;
    description2: string;
    linkedInContact: string;
    mailContact: string;
    maltContact: string;
};

export interface IFiles {
    [key: string]: {
        [lang: string]: (AboutMeItem | EducationItem | ExperienceItem | ProjectItem)[] | Generics | ContactPage;
    };
}
