import * as uuid from "uuid";

export type SingleColor = "W" | "U" | "B" | "R" | "G";
export type ColorPair = "WU" | "WB" | "UB" | "UR" | "BR" | "BG" | "RG" | "RW" | "GW" | "GU";
export type ColorTrio = "WUB" | "UBR" | "BRG" | "RGW" | "GWU" | "WBG" | "URW" | "BGU" | "RWB" | "GUR";
export type ColorQuad = "UBRG" | "BRGW" | "RGWU" | "GWUB" | "WUBR";
export type Color = "" | SingleColor | ColorPair | ColorTrio | ColorQuad | "WUBRG";
export type Rarity = "M" | "R" | "U" | "C";
export type Cmc = number | "X";

export interface INotes {
    power: number
}

export default class Card {
    uuid: string;
    id: number;
    name: string;
    color: Color;
    cmc: Cmc;
    imageUrl: string;
    rarity: Rarity;
    notes: INotes;
    rulesText: string;

    constructor(id: number, name: string, color: Color, castingCost: string, imageUrl: string, rarity: Rarity, notes: INotes, rulesText: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.cmc = this.getCmc(castingCost);
        this.imageUrl = imageUrl;
        this.rarity = rarity;
        this.notes = notes;
        this.rulesText = rulesText;
    }

    assignUuid() {
        this.uuid = uuid.v4();
        return this;
    }

    private getCmc(castingCost: string): Cmc {
        if (castingCost.indexOf("X") !== -1) return "X";
        const generic = isNaN(parseInt(castingCost, 10)) ? 0 : parseInt(castingCost, 10);
        const genericAsString = generic === 0 ? "" : generic.toString();
        const colored = castingCost.slice(genericAsString.length).length;
        return generic + colored;
    }
}