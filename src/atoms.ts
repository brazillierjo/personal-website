import { atom } from "jotai";

export const langAtom = atom<"fr" | "en">("fr");
export const hasAMessageAtom = atom<boolean>(false);
