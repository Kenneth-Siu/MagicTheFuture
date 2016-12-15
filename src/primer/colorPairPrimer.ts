import Card from "../common/Card";

export default class ColorPairPrimer {
    title: string;
    descriptionParagraphs: JSX.Element[];
    previewCards: Card[];

    constructor(title: string, descriptionParagraphs: JSX.Element[], previewCards: Card[]) {
        this.title = title;
        this.descriptionParagraphs = descriptionParagraphs;
        this.previewCards = previewCards;
    }
}