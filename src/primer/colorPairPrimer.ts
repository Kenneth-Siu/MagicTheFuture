import Card from "../common/Card";

export default class ColorPairPrimer {
    title: string;
    descriptionParagraphs: JSX.Element[];

    constructor(title: string, descriptionParagraphs: JSX.Element[]) {
        this.title = title;
        this.descriptionParagraphs = descriptionParagraphs;
    }
}