import {Color, Rarity, INotes} from "./Card";

export default class JsonCard {
    id: number;
    name: string;
    imageName: string;
    color: Color;
    castingCost: string;
    rarity: Rarity;
    notes: INotes;
    rulesText: string;
}