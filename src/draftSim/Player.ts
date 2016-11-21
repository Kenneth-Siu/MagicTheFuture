import Pack from "./Pack";
import CardPicker from "./CardPicker";

export default class Player {

    pack: Pack;
    leftHandPlayer: Player;
    rightHandPlayer: Player;
    cardPicker: CardPicker;

    constructor() {
        this.pack = new Pack();
    }
}