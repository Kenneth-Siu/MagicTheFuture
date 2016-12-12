import Card from "../common/Card";
import { Color, SingleColor } from "../common/Card";

export default class ColorAnalyser {

    private readonly fuzzAmount = 8;

    private white: number = 0;
    private blue: number = 0;
    private black: number = 0;
    private red: number = 0;
    private green: number = 0;

    constructor(picks: Card[], pick: Card) {
        this.countCards(picks);
        this.countCard(pick);
    }

    getModifier(cardColors: Color): number {
        if (cardColors === "") return Math.max(...this.getModifierArray("WUBRG"));
        return Math.min(...this.getModifierArray(cardColors));
    }

    private countCards(cards: Card[]): void {
        cards.forEach(card => this.countCard(card));
    }

    private countCard(card: Card): void {
        if (card.color.indexOf("W") !== -1) this.white++;
        if (card.color.indexOf("U") !== -1) this.blue++;
        if (card.color.indexOf("B") !== -1) this.black++;
        if (card.color.indexOf("R") !== -1) this.red++;
        if (card.color.indexOf("G") !== -1) this.green++;
    }

    private getModifierArray(cardColors: Color): number[] {
        const colorArray = cardColors.split("") as SingleColor[];
        return colorArray.map(color => this.getModifierForSingleColor(color));
    }

    private getModifierForSingleColor(color: SingleColor): number {
        if (color === "W") return this.fuzz(this.white) / this.getTotalFuzzyCount();
        if (color === "U") return this.fuzz(this.blue) / this.getTotalFuzzyCount();
        if (color === "B") return this.fuzz(this.black) / this.getTotalFuzzyCount();
        if (color === "R") return this.fuzz(this.red) / this.getTotalFuzzyCount();
        return this.fuzz(this.green) / this.getTotalFuzzyCount();
    }

    private getTotalFuzzyCount(): number {
        return this.fuzz(this.white) + this.fuzz(this.blue) + this.fuzz(this.black) + this.fuzz(this.red) + this.fuzz(this.green);
    }

    private fuzz(num: number): number {
        return num + this.fuzzAmount;
    }
}