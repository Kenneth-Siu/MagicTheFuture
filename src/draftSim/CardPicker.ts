import Pack from "./Pack";

export default class CardPicker {
    makePick(pack: Pack) {
        return pack.cards.shift();
    }
}