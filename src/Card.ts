import {CardFilterColor} from "./ColorFilter";

export type Color = "" | "W" | "U" | "B" | "R" | "G" | "WU" | "WB" | "UB" | "UR" | "BR" | "BG" | "RG" | "RW" | "GW" | "GU" | "WUB" | "UBR" | "BRG" | "RGW" | "GWU" | "WBG" | "URW" | "BGU" | "RWB" | "GUR" | "UBRG" | "BRGW" | "RGWU" | "GWUB" | "WUBR" | "WUBRG";

export default class Card {
    id: number;
    name: string;
    color: Color;
    imageUrl: string;

    constructor(id: number, name: string, color: Color, imageUrl: string) {
        this.id = id;
        this.name = name;
        this.color = color;
        this.imageUrl = imageUrl;
    }
}