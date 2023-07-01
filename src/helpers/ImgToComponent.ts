import { createElement } from "react";
import calculator from "../assets/webp/calculator.webp";
import concession from "../assets/webp/concession.webp";
import creche from "../assets/webp/creche.webp";
import markdown from "../assets/webp/markdown.webp";
import piano from "../assets/webp/piano.webp";
import vitassurance from "../assets/webp/vitassurance.webp";
import waletoo from "../assets/webp/waletoo.webp";
import workoutGenerator from "../assets/webp/workoutGenerator.webp";
import monassurancedepretbancaire from "../assets/webp/monassurancedepretbancaire.webp";

const ImgToComponent: any = {
    calculator,
    concession,
    creche,
    markdown,
    piano,
    monassurancedepretbancaire,
    vitassurance,
    waletoo,
    workoutGenerator,
};

export const img = (key: number, image: string) => {
    const element = createElement("img", { key, src: ImgToComponent[image], className: "rounded-lg", loading: "lazy" });

    return element;
};
