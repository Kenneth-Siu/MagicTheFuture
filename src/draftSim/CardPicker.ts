import * as _ from "lodash";
import Pack from "./Pack";
import Card from "../common/Card";
import {Color} from "../common/Card";

class ColorCount {
    white: number;
    blue: number;
    black: number;
    red: number;
    green: number;

    constructor() {
        this.white = 0;
        this.blue = 0;
        this.black = 0;
        this.red = 0;
        this.green = 0;
    }

    countCard(card: Card) {
        if (card.color.indexOf("W") !== -1) this.white++;
        if (card.color.indexOf("U") !== -1) this.blue++;
        if (card.color.indexOf("B") !== -1) this.black++;
        if (card.color.indexOf("R") !== -1) this.red++;
        if (card.color.indexOf("G") !== -1) this.green++;
    }

    getColorChoice(): Color {
        const largestCount = _.max([this.white, this.blue, this.black, this.red, this.green]);
        let colors = "";
        if (this.white === largestCount) colors += "W";
        if (this.blue === largestCount) colors += "U";
        if (this.black === largestCount) colors += "B";
        if (this.red === largestCount) colors += "R";
        if (this.green === largestCount) colors += "G";

        if (colors.length === 5) return "";
        else if (colors.length === 1) return colors as Color;
        else return colors.charAt(_.random(0, colors.length - 1)) as Color;
    }
}

export default class CardPicker {
    colorCount: ColorCount;

    constructor() {
        this.colorCount = new ColorCount();
    }

    decidePick(pack: Pack) {
        if (!pack || pack.cards.length === 0) {
            throw "Sorry Dave, I can't let you pick from a nonexistent or empty pack.";
        }
        const colorChoice = this.colorCount.getColorChoice();
        let pick = _.find(pack.cards, card => card.color.indexOf(colorChoice) !== -1);
        if (!pick || colorChoice === "") {
            pick = pack.cards[0];
        }
        this.colorCount.countCard(pick);
        return pick;
    }
}