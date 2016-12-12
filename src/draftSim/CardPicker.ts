import * as _ from "lodash";
import Pack from "./Pack";
import Card from "../common/Card";
import { Color, SingleColor } from "../common/Card";
import ColorAnalyser from "./ColorAnalyser";

class CardRating {
    card: Card;
    rating: number;

    constructor(card: Card, rating: number) {
        this.card = card;
        this.rating = rating;
    }
}

export default class CardPicker {
    picks: Card[];
    packRatings: CardRating[];

    decidePick(pack: Pack, picks: Card[]): Card {
        if (!pack || pack.cards.length === 0) throw "Sorry Dave, I can't let you pick from a nonexistent or empty pack.";
        this.picks = picks;
        this.evaluatePack(pack);
        return this.makePick();
    }

    private evaluatePack(pack: Pack): void {
        this.packRatings = pack.cards.map(card => this.evaluateCard(card));
    }

    private evaluateCard(card: Card): CardRating {
        const colorAnalyser = new ColorAnalyser(this.picks, card);
        const pickRatings = this.picks.map(pick => {
            return pick.notes.power * colorAnalyser.getModifier(pick.color)
        }).reduce((a, b) => a + b, 0);
        const cardRating = card.notes.power * colorAnalyser.getModifier(card.color);
        return new CardRating(card, pickRatings + cardRating);
    }

    private makePick(): Card {
        return _.maxBy(this.packRatings, card => card.rating).card;
    }
}