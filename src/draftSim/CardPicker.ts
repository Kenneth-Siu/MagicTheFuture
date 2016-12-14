import * as _ from "lodash";
import Pack from "./Pack";
import Card from "../common/Card";
import { Color, SingleColor } from "../common/Card";
import ColorAnalyser from "./ColorAnalyser";
import SynergyAnalyser from "./SynergyAnalyser";
import CardRating from "./CardRating";

export default class CardPicker {
    picks: Card[];
    packRatings: CardRating[];

    decidePick(pack: Pack, picks: Card[]): Card {
        if (!pack || pack.cards.length === 0) throw "Sorry Dave, I can't let you pick from a nonexistent or empty pack.";
        this.picks = picks;
        this.evaluatePack(picks, pack);
        return this.makePick();
    }

    evaluateCard(picks: Card[], card: Card): CardRating {
        const colorAnalyser = new ColorAnalyser(picks, card);
        const synergyAnalyser = new SynergyAnalyser(picks, card);
        const pickRatings = picks.map(pick => {
            return synergyAnalyser.getExistingPowerOfCard(pick) * colorAnalyser.getModifier(pick.color)
        }).reduce((a, b) => a + b, 0);
        const cardRating = synergyAnalyser.getPotentialPowerOfCard(card) * colorAnalyser.getModifier(card.color);
        return new CardRating(card, pickRatings + cardRating);
    }

    private evaluatePack(picks: Card[], pack: Pack): void {
        this.packRatings = pack.cards.map(card => this.evaluateCard(picks, card));
    }

    private makePick(): Card {
        return _.maxBy(this.packRatings, card => card.rating).card;
    }
}