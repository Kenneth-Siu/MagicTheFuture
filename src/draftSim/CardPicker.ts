import * as _ from "lodash";
import Pack from "./Pack";
import Card from "../common/Card";
import { Color, SingleColor } from "../common/Card";

class CardRating {
    card: Card;
    rating: number;

    constructor(card: Card, rating: number) {
        this.card = card;
        this.rating = rating;
    }
}

class ColorAnalyser {

    private readonly fuzzAmount = 5;

    private white: number;
    private blue: number;
    private black: number;
    private red: number;
    private green: number;

    constructor(cards: Card[]) {
        this.white = 0;
        this.blue = 0;
        this.black = 0;
        this.red = 0;
        this.green = 0;
        this.countCards(cards);
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

    getModifier(cardColors: Color): number {
        if (cardColors === "") return Math.max(...this.getModifierArray("WUBRG"));
        return Math.min(...this.getModifierArray(cardColors));
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

export default class CardPicker {
    colorAnalyser: ColorAnalyser;
    packRatings: CardRating[];

    decidePick(pack: Pack, picks: Card[]): Card {
        if (!pack || pack.cards.length === 0) throw "Sorry Dave, I can't let you pick from a nonexistent or empty pack.";
        this.analysePicks(picks);
        this.evaluatePack(pack);
        return this.makePick();
    }

    private analysePicks(picks: Card[]): void {
        this.colorAnalyser = new ColorAnalyser(picks);
    }

    private evaluatePack(pack: Pack): void {
        this.packRatings = pack.cards.map(card => this.evaluateCard(card));
    }

    private evaluateCard(card: Card): CardRating {
        const rating = card.notes.power * this.colorAnalyser.getModifier(card.color);
        return new CardRating(card, rating);
    }

    private makePick(): Card {
        return _.maxBy(this.packRatings, card => card.rating).card;
    }
}