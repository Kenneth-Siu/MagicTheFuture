import cardList from "../common/cardList";
import * as _ from "lodash";
import Card from "../common/Card";

const mythics = _.filter(cardList, card => card.rarity === "M");
const numOfMythics = mythics.length;
const rares = _.filter(cardList, card => card.rarity === "R");
const numOfRares = rares.length;
const uncommons = _.filter(cardList, card => card.rarity === "U");
const numOfUncommons = uncommons.length;
const commons = _.filter(cardList, card => card.rarity === "C");
const numOfCommons = commons.length;

export default function generatePack(): Card[] {
    const cards: Card[] = [];
    if (_.random(0, 7) === 0) {
        cards.push(_.cloneDeep(mythics[_.random(0, numOfMythics - 1)]).assignUuid());
    } else {
        cards.push(_.cloneDeep(rares[_.random(0, numOfRares - 1)]).assignUuid());
    }
    for (let i = 0; i < 3; i++) {
        cards.push(_.cloneDeep(uncommons[_.random(0, numOfUncommons - 1)]).assignUuid());
    }
    for (let i = 0; i < 10; i++) {
        cards.push(_.cloneDeep(commons[_.random(0, numOfCommons - 1)]).assignUuid());
    }
    return cards;
}