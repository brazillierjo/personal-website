import { useEffect, useState } from "react";
import { useAtom } from "jotai";

import { langAtom } from "../atoms";
import enAboutMe from "../data/en/aboutMe.json";
import enContact from "../data/en/contact.json";
import enEducation from "../data/en/education.json";
import enExperience from "../data/en/experiences.json";
import enGenerics from "../data/en/generics.json";
import enProjects from "../data/en/projects.json";
import frAboutMe from "../data/fr/aboutMe.json";
import frContact from "../data/fr/contact.json";
import frEducation from "../data/fr/education.json";
import frExperience from "../data/fr/experiences.json";
import frGenerics from "../data/fr/generics.json";
import frProjects from "../data/fr/projects.json";
import {
  AboutMeItem,
  ContactPage,
  EducationItem,
  ExperienceItem,
  Generics,
  IFiles,
  ProjectItem,
} from "../Interfaces/IFiles";

export const useLangData = (fileName: keyof IFiles) => {
  const [lang] = useAtom(langAtom);
  const [data, setData] = useState<
    (AboutMeItem | EducationItem | ExperienceItem | ProjectItem)[] | Generics | ContactPage | null
  >(null);

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
    contact: {
      fr: frContact,
      en: enContact,
    },
  };

  useEffect(() => {
    const localizedData = files[fileName][lang];

    setData(localizedData);
  }, [lang, fileName]);

  return data;
};
