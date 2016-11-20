import Card from "../common/Card";
import * as _ from "lodash";

export type CardFilterColor = "colorless" | "white" | "blue" | "black" | "red" | "green" | "multicolor";

export class ColorFilter {
    colorless: boolean;
    white: boolean;
    blue: boolean;
    black: boolean;
    red: boolean;
    green: boolean;
    multicolor: boolean;
    [key: string]: boolean | any;

    constructor() {
        this.colorless = false;
        this.white = false;
        this.blue = false;
        this.black = false;
        this.red = false;
        this.green = false;
        this.multicolor = false;
    }

    showCard(card: Card) {
        if (!this.colorless && !this.white && !this.blue && !this.black && !this.red && !this.green && !this.multicolor) {
            return true;
        }
        if (card.color === "") {
            return this.colorless;
        }
        if (this.multicolor && card.color.length > 1) {
            return true;
        }
        const isWhite = _.includes(card.color, "W");
        const isBlue = _.includes(card.color, "U");
        const isBlack = _.includes(card.color, "B");
        const isRed = _.includes(card.color, "R");
        const isGreen = _.includes(card.color, "G");

        return (!isWhite || this.white) && (!isBlue || this.blue) && (!isBlack || this.black) && (!isRed || this.red) && (!isGreen || this.green);
    }
}