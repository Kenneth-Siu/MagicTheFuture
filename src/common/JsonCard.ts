import {Color, Rarity} from "./Card";

export default class JsonCard {
    id: number;
    name: string;
    imageName: string;
    color: Color;
    rarity: Rarity;
}