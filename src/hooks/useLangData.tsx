import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { langAtom } from "../atoms";
import { AboutMeItem, EducationItem, ExperienceItem, Generics, IFiles, ProjectItem } from "../Interfaces/IFiles";

import frGenerics from "../data/fr/generics.json";
import enGenerics from "../data/en/generics.json";
import frAboutMe from "../data/fr/aboutMe.json";
import enAboutMe from "../data/en/aboutMe.json";
import frEducation from "../data/fr/education.json";
import enEducation from "../data/en/education.json";
import frExperience from "../data/fr/experiences.json";
import enExperience from "../data/en/experiences.json";
import frProjects from "../data/fr/projects.json";
import enProjects from "../data/en/projects.json";

export const useLangData = (fileName: keyof IFiles) => {
    const [lang] = useAtom(langAtom);
    const [data, setData] = useState<(AboutMeItem | EducationItem | ExperienceItem | ProjectItem)[] | Generics | null>(
        null
    );

    const files: IFiles = {
        generics: {
            fr: frGenerics,
            en: enGenerics,
        },
        aboutMe: {
            fr: frAboutMe,
            en: enAboutMe,
        },
        education: {
            fr: frEducation,
            en: enEducation,
        },
        experiences: {
            fr: frExperience,
            en: enExperience,
        },
        projects: {
            fr: frProjects,
            en: enProjects,
        },
    };

    useEffect(() => {
        const localizedData = files[fileName][lang];

        setData(localizedData);
    }, [lang, fileName]);

    return data;
};
