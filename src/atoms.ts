import { atom } from "jotai";

export const langAtom = atom<"fr" | "en">("en");

export const isUnderConstructionAtom = atom<boolean>(false);
