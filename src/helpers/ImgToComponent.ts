import { createElement } from "react";
import calculator from "../assets/webp/calculator.webp";
import concession from "../assets/webp/concession.webp";
import creche from "../assets/webp/creche.webp";
import markdown from "../assets/webp/markdown.webp";
import piano from "../assets/webp/piano.webp";
import vitassurance from "../assets/webp/vitassurance.webp";
import walletoo from "../assets/webp/walletoo.webp";
import workoutGenerator from "../assets/webp/workoutGenerator.webp";

type ImgToComponentType<T extends string> = Record<T, string>;

const ImgToComponent: ImgToComponentType<string> = {
    calculator,
    concession,
    creche,
    markdown,
    piano,
    vitassurance,
    workoutGenerator,
    walletoo,
};

export const img = (key: number, image: string) => {
    const element = createElement("img", { key, src: ImgToComponent[image], className: "rounded-lg", loading: "lazy" });

    return element;
};
