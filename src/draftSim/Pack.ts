import Card from "../common/Card";
import generatePack from "./generatePack";

export default class Pack {

    cards: Card[];

    constructor() {
        this.cards = generatePack();
    }
}