export type Generics = {
    buttons: {
        contactMe: string;
        readMore: string;
        close: string;
        goToProjects: string;
    };
    main: {
        job: string;
        infoJob: string;
    };
    aboutMe: {
        title: string;
        firstSkill: string;
        secondSkill: string;
        thirdSkill: string;
        fourthSkill: string;
        fifthSkill: string;
    };
    experiences: {
        title: string;
        professionalPath: string;
        scholarPath: string;
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

export interface IFiles {
    [key: string]: {
        [lang: string]: (AboutMeItem | EducationItem | ExperienceItem | ProjectItem)[] | Generics;
    };
}
