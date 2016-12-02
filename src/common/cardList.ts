const jsonCardList = require("./resources/cardListJson.json") as JsonCard[];
import * as _ from "lodash";
import Card from "./Card";
import JsonCard from "./JsonCard";

const sortedJsonCardList = _.sortBy(jsonCardList, "id");

const cardList = _.map(sortedJsonCardList, jsonCard => {
    const imageUrl = require(`./resources/images/${jsonCard.imageName}.jpg`) as string;
    return new Card(
        jsonCard.id,
        jsonCard.name,
        jsonCard.color,
        jsonCard.castingCost,
        `../dist/${imageUrl}`,
        jsonCard.rarity,
        jsonCard.notes,
        jsonCard.rulesText
    );
});

export default cardList as Card[];