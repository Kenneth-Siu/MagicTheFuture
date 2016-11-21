import * as _ from "lodash";
import Pack from "./Pack";
import CardPicker from "./CardPicker";
import Card from "../common/Card";

export default class Player {

    nextPack: Pack;
    pack: Pack;
    leftHandPlayer: Player;
    rightHandPlayer: Player;
    cardPicker: CardPicker;
    picks: Card[];

    constructor(leftHandPlayer?: Player) {
        this.nextPack = new Pack();
        this.picks = [];
        this.cardPicker = new CardPicker();
        if (leftHandPlayer) {
            this.leftHandPlayer = leftHandPlayer;
            this.leftHandPlayer.setRightHandPlayer(this);
        }
    }

    setLeftHandPlayer(leftHandPlayer: Player) {
        this.leftHandPlayer = leftHandPlayer;
        if (!leftHandPlayer.rightHandPlayer) {
            leftHandPlayer.setRightHandPlayer(this);
        }
    }

    setRightHandPlayer(rightHandPlayer: Player) {
        this.rightHandPlayer = rightHandPlayer;
        if (!rightHandPlayer.leftHandPlayer) {
            rightHandPlayer.setLeftHandPlayer(this);
        }
    }

    makePick(card: Card) {
        if (!this.nextPack) {
            throw "No next pack?!?!";
        }
        this.pack = this.nextPack;
        this.nextPack = null;
        const cardIndex = _.findIndex(this.pack.cards, cardInPack => cardInPack.id === card.id);
        if (cardIndex === -1) {
            throw `You tried to pick ${card.name} that's not in the pack. Cheater.`
        }
        const pick = _.pullAt(this.pack.cards, cardIndex)[0];
        this.picks.push(pick);
    }

    passPackLeft() {
        this.leftHandPlayer.receivePack(this.pack);
    }

    receivePack(pack: Pack) {
        this.nextPack = pack;
    }

    computerPick() {
        this.pack = this.nextPack;
        this.picks.push(this.cardPicker.makePick(this.pack));
    }

    static initTableOfPlayers() {
        const numOfPlayers = 8;
        const players: Player[] = [];
        for (let i = 0; i < numOfPlayers; i++) {
            const newPlayer = i === 0 ? new Player() : new Player(players[i - 1]);
            players.push(newPlayer);
        }
        players[0].setLeftHandPlayer(players[numOfPlayers - 1]);
        return players;
    }
}