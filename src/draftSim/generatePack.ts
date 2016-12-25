import cardList from "../common/cardList";
import * as _ from "lodash";
import Card from "../common/Card";
import {SingleColor, Color} from "../common/Card";

const mythics = _.filter(cardList, card => card.rarity === "M");
const rares = _.filter(cardList, card => card.rarity === "R");
const uncommons = _.filter(cardList, card => card.rarity === "U");
const commons = _.filter(cardList, card => card.rarity === "C");

export default function generatePack(): Card[] {
    const cards: Card[] = [];
    if (_.random(0, 7) === 0) {
        cards.push(_.cloneDeep(_.sample(mythics)).assignUuid());
    } else {
        cards.push(_.cloneDeep(_.sample(rares)).assignUuid());
    }
    cards.push(...generateUncommons());
    cards.push(...generateCommons());
    return cards;
}

function generateUncommons(): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < 3; i++) {
        const bannedCardColors = cards.map(card => card.color);
        const otherColorUncommons = uncommons.filter(uncommon => !bannedCardColors.some(cardColor => cardColor === uncommon.color));
        cards.push(_.cloneDeep(_.sample(otherColorUncommons)).assignUuid());
    }
    return cards;
}

function generateCommons(): Card[] {
    const cards: Card[] = [];
    const singleColors: SingleColor[] = ["W", "U", "B", "R", "G"];
    singleColors.forEach(singleColor => cards.push(generateCommonOfColor(singleColor)));
    for (let i = 0; i < 5; i++) {
        const bannedCardColors: Color[] = [];
        const existingCardColors = cards.map(card => card.color)
        existingCardColors.forEach(color => {
            if (existingCardColors.filter(existingColor => existingColor === color).length >= 3 && !bannedCardColors.some(bannedColor => bannedColor === color)) {
                bannedCardColors.push(color);
            }
        });
        const otherColorCommons = commons.filter(common => !bannedCardColors.some(cardColor => cardColor === common.color));
        const nonRepeatedCommons = otherColorCommons.filter(common => !cards.some(card => card.id === common.id));
        cards.push(_.cloneDeep(_.sample(nonRepeatedCommons)).assignUuid());
    }
    return _.shuffle(cards);
}

function generateCommonOfColor(singleColor: SingleColor): Card {
    const coloredCommons = commons.filter(common => common.color === singleColor);
    return _.cloneDeep(coloredCommons[_.random(0, coloredCommons.length - 1)]).assignUuid();
}