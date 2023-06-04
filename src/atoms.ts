import { atom } from "jotai";

const browserLang = navigator.language.split("-")[0];
export const langAtom = atom<"fr" | "en">(browserLang);

export const isUnderConstructionAtom = atom<boolean>(false);
