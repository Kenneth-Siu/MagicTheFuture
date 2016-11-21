export type Color = "" | "W" | "U" | "B" | "R" | "G" | "WU" | "WB" | "UB" | "UR" | "BR" | "BG" | "RG" | "RW" | "GW" | "GU" | "WUB" | "UBR" | "BRG" | "RGW" | "GWU" | "WBG" | "URW" | "BGU" | "RWB" | "GUR" | "UBRG" | "BRGW" | "RGWU" | "GWUB" | "WUBR" | "WUBRG";
export type Rarity = "M" | "R" | "U" | "C";

export default class Card {
    id: number;
    name: string;
    color: Color;
    imageUrl: string;
    rarity: Rarity;

    constructor(id: number, name: string, color: Color, imageUrl: string, rarity: Rarity) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.imageUrl = imageUrl;
        this.rarity = rarity;
    }
}