import * as _ from "lodash";
import Pack from "./Pack";
import CardPicker from "./CardPicker";
import Card from "../common/Card";
import { PassDirection } from "./components/DraftSim";

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

    setLeftHandPlayer(leftHandPlayer: Player): void {
        this.leftHandPlayer = leftHandPlayer;
        if (!leftHandPlayer.rightHandPlayer) {
            leftHandPlayer.setRightHandPlayer(this);
        }
    }

    setRightHandPlayer(rightHandPlayer: Player): void {
        this.rightHandPlayer = rightHandPlayer;
        if (!rightHandPlayer.leftHandPlayer) {
            rightHandPlayer.setLeftHandPlayer(this);
        }
    }

    makePick(card: Card): void {
        if (!this.nextPack || this.nextPack.cards.length === 0) {
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

    passPack(passDirection: PassDirection): void {
        if (passDirection === "left") {
            this.leftHandPlayer.receivePack(this.pack);
        } else {
            this.rightHandPlayer.receivePack(this.pack);
        }
    }

    receivePack(pack: Pack): void {
        this.nextPack = pack;
    }

    computerPick(): void {
        const pick = this.cardPicker.decidePick(this.nextPack, this.picks);
        this.makePick(pick);
    }

    openPack(): void {
        this.nextPack = new Pack();
    }

    static createTableOfPlayers(): Player[] {
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