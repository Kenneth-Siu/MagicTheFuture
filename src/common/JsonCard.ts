import {Color, Rarity, INotes} from "./Card";

export default class JsonCard {
    id: number;
    name: string;
    imageName: string;
    color: Color;
    rarity: Rarity;
    notes: INotes;
    rulesText: string;
}