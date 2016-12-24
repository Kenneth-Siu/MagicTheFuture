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
        const synergyAnalyser = new SynergyAnalyser(picks, card);
        const uncoloredPickRatings = picks.map(pick => new CardRating(pick, synergyAnalyser.getExistingPowerOfCard(pick)));
        const uncoloredCardRating = new CardRating(card, synergyAnalyser.getPotentialPowerOfCard(card));
        const colorAnalyser = new ColorAnalyser(uncoloredPickRatings, uncoloredCardRating);
        const coloredPickRatings = uncoloredPickRatings.map(pickRating => pickRating.rating * colorAnalyser.getModifier(pickRating.card.color));
        const aggregateColoredPickRatings = coloredPickRatings.reduce((a, b) => a + b, 0);
        const coloredCardRating = uncoloredCardRating.rating * colorAnalyser.getModifier(card.color);
        return new CardRating(card, aggregateColoredPickRatings + coloredCardRating);
    }

    private evaluatePack(picks: Card[], pack: Pack): void {
        this.packRatings = pack.cards.map(card => this.evaluateCard(picks, card));
    }

    private makePick(): Card {
        return _.maxBy(this.packRatings, card => card.rating).card;
    }
}