const jsonCardList = require("./resources/cardListJson.json");
import * as _ from "lodash";
import Card from "./Card";
import JsonCard from "./JsonCard";

const cardList = _.map(jsonCardList as JsonCard[], jsonCard => {
    const imageUrl = require(`./resources/images/${jsonCard.imageName}.jpg`) as string;
    return new Card(jsonCard.name, `./dist/${imageUrl}`);
});

export default cardList as Card[];