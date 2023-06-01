import { atom } from "jotai";

export const langAtom = atom<"fr" | "en">("fr");

export const isUnderConstructionAtom = atom<boolean>(true);
