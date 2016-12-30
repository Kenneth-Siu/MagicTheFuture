import Card from "../common/Card";

export default class ColorPairPrimer {
    id: string;
    title: string;
    descriptionParagraphs: JSX.Element[];

    constructor(id: string, title: string, descriptionParagraphs: JSX.Element[]) {
        this.id = id;
        this.title = title;
        this.descriptionParagraphs = descriptionParagraphs;
    }
}