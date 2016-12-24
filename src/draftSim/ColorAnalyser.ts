import * as _ from "lodash";
import Card from "../common/Card";
import { Color, SingleColor } from "../common/Card";
import CardRating from "./CardRating";

export default class ColorAnalyser {

    private white: number = Math.random() * 0.1;
    private blue: number = Math.random() * 0.1;
    private black: number = Math.random() * 0.1;
    private red: number = Math.random() * 0.1;
    private green: number = Math.random() * 0.1;

    private whiteFuzz: number;
    private blueFuzz: number;
    private blackFuzz: number;
    private redFuzz: number;
    private greenFuzz: number;

    private get fuzzedWhite() { return this.white + this.whiteFuzz; }
    private get fuzzedBlue() { return this.blue + this.blueFuzz; }
    private get fuzzedBlack() { return this.black + this.blackFuzz; }
    private get fuzzedRed() { return this.red + this.redFuzz; }
    private get fuzzedGreen() { return this.green + this.greenFuzz; }

    private totalPicks: number;

    [key: string]: number | any;

    constructor(existingPickRatings: CardRating[], potentialPickRating: CardRating) {
        this.totalPicks = existingPickRatings.length;
        this.countRatings(existingPickRatings);
        this.countRating(potentialPickRating);
        this.generateFuzz();
    }

    getModifier(cardColors: Color): number {
        if (cardColors === "") return Math.max(...this.getModifierArray("WUBRG"));
        return Math.min(...this.getModifierArray(cardColors));
    }

    private countRatings(ratings: CardRating[]): void {
        ratings.forEach(rating => this.countRating(rating));
    }

    private countRating(rating: CardRating): void {
        if (rating.card.color.indexOf("W") !== -1) this.white += rating.rating;
        if (rating.card.color.indexOf("U") !== -1) this.blue += rating.rating;
        if (rating.card.color.indexOf("B") !== -1) this.black += rating.rating;
        if (rating.card.color.indexOf("R") !== -1) this.red += rating.rating;
        if (rating.card.color.indexOf("G") !== -1) this.green += rating.rating;
    }

    private generateFuzz(): void {
        const unorderedColoredCounts = [
            new ColorCount("white", this.white),
            new ColorCount("blue", this.blue),
            new ColorCount("black", this.black),
            new ColorCount("red", this.red),
            new ColorCount("green", this.green)
        ];
        const orderedColoredCounts = unorderedColoredCounts.sort((a, b) => a.rating - b.rating);
        orderedColoredCounts.forEach((colorCount, index) => {
            this[colorCount.name + "Fuzz"] = this.getColorFuzz(index);
        })
    }

    private getColorFuzz(rankByLowest: number) {
        switch (rankByLowest) {
            case 0:
                return _.clamp(72 - this.totalPicks * 9, 0, 45);
            case 1:
                return _.clamp(126 - this.totalPicks * 9, 0, 45);
            case 2:
                return _.clamp(216 - this.totalPicks * 12, 0, 45);
            default:
                return 45;
        }
    }

    private getModifierArray(cardColors: Color): number[] {
        const colorArray = cardColors.split("") as SingleColor[];
        return colorArray.map(color => this.getModifierForSingleColor(color));
    }

    private getModifierForSingleColor(color: SingleColor): number {
        if (color === "W") return this.fuzzedWhite / this.getTotalFuzzyCount();
        if (color === "U") return this.fuzzedBlue / this.getTotalFuzzyCount();
        if (color === "B") return this.fuzzedBlack / this.getTotalFuzzyCount();
        if (color === "R") return this.fuzzedRed / this.getTotalFuzzyCount();
        return this.fuzzedGreen / this.getTotalFuzzyCount();
    }

    private getTotalFuzzyCount(): number {
        return this.fuzzedWhite + this.fuzzedBlue + this.fuzzedBlack + this.fuzzedRed + this.fuzzedGreen;
    }
}

class ColorCount {
    name: string;
    rating: number;

    constructor(name: string, rating: number) {
        this.name = name;
        this.rating = rating;
    }
}