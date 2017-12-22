import * as _ from "lodash";

const tokensList = [
    "Police",
    "Police.1",
    "Police.2"
];

export default _.map(tokensList, tokenName => {
    return `../dist/${require(`../common/resources/tokenImages/${tokenName}.jpg`)}`;
});