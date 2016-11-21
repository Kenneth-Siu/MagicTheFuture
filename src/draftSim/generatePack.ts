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
    const pack: Card[] = [];
    if (_.random(0, 7) === 0) {
        pack.push(mythics[_.random(0, numOfMythics - 1)]);
    } else {
        pack.push(rares[_.random(0, numOfRares - 1)]);
    }
    for (let i = 0; i < 3; i++) {
        pack.push(uncommons[_.random(0, numOfUncommons - 1)]);
    }
    for (let i = 0; i < 10; i++) {
        pack.push(commons[_.random(0, numOfCommons - 1)]);
    }
    return pack;
}