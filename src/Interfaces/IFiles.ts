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

export type Project = {
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

export interface IFiles {
    [key: string]: {
        fr: (AboutMeItem | EducationItem | ExperienceItem | Project)[];
        en: (AboutMeItem | EducationItem | ExperienceItem | Project)[];
    };
}
