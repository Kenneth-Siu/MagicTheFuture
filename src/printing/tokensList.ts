import * as _ from "lodash";

const tokensList = [
    "Equipment",
    "Equipment.1",
    "Equipment.2",
    "Equipment.3",
    "Equipment.4",
    "Equipment.5",
    "Equipment.6",
    "Equipment.7",
    "Equipment.8",
    "Equipment.9",
    "Equipment.10",
    "Equipment.11",
    "Equipment.12",
    "Equipment.13",
    "Equipment.14",
    "Fighter",
    "Fighter.1",
    "Military",
    "Military.1",
    "Wildschwein",
    "Xeno Scion",
    "Xeno Scion.1"
];

export default _.map(tokensList, tokenName => {
    return `../dist/${require(`../common/resources/tokenImages/${tokenName}.jpg`)}`;
});