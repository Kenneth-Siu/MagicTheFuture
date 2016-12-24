import * as _ from "lodash";
import Pack from "./Pack";
import CardPicker from "./CardPicker";
import {ColorPreferences} from "./CardPicker";
import Card from "../common/Card";
import { PassDirection } from "./components/DraftSim";
import {SingleColor} from "../common/Card";

export default class Player {

    nextPack: Pack;
    pack: Pack;
    leftHandPlayer: Player;
    rightHandPlayer: Player;
    cardPicker: CardPicker;
    picks: Card[];
    sideboard: Card[];

    constructor(leftHandPlayer?: Player) {
        this.nextPack = new Pack();
        this.picks = [];
        this.sideboard = [];
        this.cardPicker = new CardPicker();
        if (leftHandPlayer) {
            this.leftHandPlayer = leftHandPlayer;
            this.leftHandPlayer.setRightHandPlayer(this);
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

    computerPick(): void {
        const pick = this.cardPicker.decidePick(this.nextPack, this.picks);
        this.makePick(pick);
        this.sideboardUnwantedCards();
    }

    openPack(): void {
        this.nextPack = new Pack();
    }

    getColorPreferences(): ColorPreferences {
        return this.cardPicker.getColorPreferences(this.picks);
    }

    moveFromPicksToSideboard(card: Card): void {
        const removedCard = _.remove(this.picks, pick => pick === card);
        this.sideboard.push(...removedCard);
    }

    moveFromSideboardToPicks(card: Card): void {
        const removedCard = _.remove(this.sideboard, pick => pick === card);
        this.picks.push(...removedCard);
    }

    private setLeftHandPlayer(leftHandPlayer: Player): void {
        this.leftHandPlayer = leftHandPlayer;
        if (!leftHandPlayer.rightHandPlayer) {
            leftHandPlayer.setRightHandPlayer(this);
        }
    }

    private setRightHandPlayer(rightHandPlayer: Player): void {
        this.rightHandPlayer = rightHandPlayer;
        if (!rightHandPlayer.leftHandPlayer) {
            rightHandPlayer.setLeftHandPlayer(this);
        }
    }

    private receivePack(pack: Pack): void {
        this.nextPack = pack;
    }

    private sideboardUnwantedCards(): void {
        const colorPreferences = this.getColorPreferences();
        const removedCards = _.remove(this.picks, pick => {
            const colorsOfCard = pick.color.split("") as SingleColor[];
            return colorsOfCard.some(color => {
                if (color === "W") return colorPreferences.white < 0.1;
                if (color === "U") return colorPreferences.blue < 0.1;
                if (color === "B") return colorPreferences.black < 0.1;
                if (color === "R") return colorPreferences.red < 0.1;
                if (color === "G") return colorPreferences.green < 0.1;
                return false;
            })
        });
        this.sideboard.push(...removedCards);
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