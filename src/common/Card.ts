import * as uuid from "uuid";

export type SingleColor = "W" | "U" | "B" | "R" | "G";
export type ColorPair = "WU" | "WB" | "UB" | "UR" | "BR" | "BG" | "RG" | "RW" | "GW" | "GU";
export type ColorTrio = "WUB" | "UBR" | "BRG" | "RGW" | "GWU" | "WBG" | "URW" | "BGU" | "RWB" | "GUR";
export type ColorQuad = "UBRG" | "BRGW" | "RGWU" | "GWUB" | "WUBR";
export type Color = "" | SingleColor | ColorPair | ColorTrio | ColorQuad | "WUBRG";
export type Rarity = "M" | "R" | "U" | "C";

export interface INotes {
    power: number
}

export default class Card {
    uuid: string;
    id: number;
    name: string;
    color: Color;
    imageUrl: string;
    rarity: Rarity;
    notes: INotes;
    rulesText: string;

    constructor(id: number, name: string, color: Color, imageUrl: string, rarity: Rarity, notes: INotes, rulesText: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.imageUrl = imageUrl;
        this.rarity = rarity;
        this.notes = notes;
        this.rulesText = rulesText;
    }

    assignUuid() {
        this.uuid = uuid.v4();
        return this;
    }
}