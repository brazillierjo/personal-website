import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { langAtom } from "../atoms";
import { IFiles } from "../Interfaces/IFiles";

import frAboutMe from "../data/fr/aboutMe.json";
import enAboutMe from "../data/en/aboutMe.json";
import frEducation from "../data/fr/education.json";
import enEducation from "../data/en/education.json";
import frExperience from "../data/fr/experiences.json";
import enExperience from "../data/en/experiences.json";
import frProjects from "../data/fr/projects.json";
import enProjects from "../data/en/projects.json";

export const useLangData = (fileName: string) => {
    const [lang] = useAtom(langAtom);
    const [data, setData] = useState<IFiles | null>(null);

    const files: any = {
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
