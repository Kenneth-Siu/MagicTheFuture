import * as _ from "lodash";
import Card from "../common/Card";

export default class SynergyAnalyser {

    private devices: number = 0;
    private deviceTokens: number = 0;
    private lifeloss: number = 0;
    private lifegain: number = 0;
    private unitTokens: number = 0;
    private deathTrigger: number = 0;
    private etb: number = 0;
    private equipment: number = 0;
    private atarka: number = 0;
    private tactical: number = 0;
    private evasion: number = 0;
    private ramp: number = 0;
    [key: string]: number | any;

    private totalPicks: number;

    constructor(picks: Card[], pick: Card) {
        this.totalPicks = picks.length;
        this.countCards(picks);
        this.countCard(pick);
    }

    getPotentialPowerOfCard(card: Card): number {
        if (!card.notes.potential) return card.notes.power;
        const fractionOfPotential = this.getFractionOfPotential(card);
        return card.notes.power + (card.notes.potential - card.notes.power) * (fractionOfPotential + (1 - fractionOfPotential) * this.getOptimism());
    }

    getExistingPowerOfCard(card: Card): number {
        if (!card.notes.potential) return card.notes.power;
        return card.notes.power + (card.notes.potential - card.notes.power) * this.getFractionOfPotential(card);
    }

    private getFractionOfPotential(card: Card): number {
        let fractionOfPotentialFulfilled = 0;
        _.forIn(card.notes.synergies, (value, key) => {
            if (this[key] === undefined) throw "Missing card tag.";
            fractionOfPotentialFulfilled += this[key] / value;
        });
        return fractionOfPotentialFulfilled;
    }

    private countCards(cards: Card[]): void {
        cards.forEach(card => this.countCard(card));
    }

    private countCard(card: Card): void {
        _.forIn(card.notes.tags, (value, key) => {
            if (this[key] === undefined) throw "Missing card tag.";
            this[key] += value;
        });
    }

    private getOptimism(): number {
        return _.clamp(1.6 - this.totalPicks * 0.2, 0, 1.0);
    }
}