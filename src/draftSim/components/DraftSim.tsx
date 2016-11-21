import * as React from "react";
import * as _ from "lodash";
import Player from "../Player";
import Pack from "../Pack";
import Card from "../../common/Card";
import CardPick from "./CardPick";
import CardImage from "../../common/components/CardImage";

export type PassDirection = "left" | "right";

interface DraftSimState { pack: Pack, picks: Card[], packNumber: number };

export interface DraftSimProps { }

export default class DraftSim extends React.Component<DraftSimProps, {}> {

    state: DraftSimState;
    humanPlayer: Player;
    computerPlayers: Player[];
    passDirection: PassDirection;

    constructor() {
        super();
        this.computerPlayers = Player.initTableOfPlayers();
        this.humanPlayer = this.computerPlayers.shift();
        this.state = {
            pack: this.humanPlayer.nextPack,
            picks: [],
            packNumber: 1
        };
        this.passDirection = "left";
    }

    makePick(card: Card) {
        this.humanPlayer.makePick(card);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.computerPick();
        }
        this.humanPlayer.passPack(this.passDirection);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.passPack(this.passDirection);
        }
        if (this.humanPlayer.nextPack.cards.length === 0 && this.state.packNumber < 3) {
            this.humanPlayer.openPack();
            for (const computerPlayer of this.computerPlayers) {
                computerPlayer.openPack();
            }
            this.passDirection = this.passDirection === "left" ? "right" : "left";
            this.setState({ packNumber: this.state.packNumber + 1 });
        }
        this.setState({
            pack: this.humanPlayer.nextPack,
            picks: this.humanPlayer.picks
        });
    }

    getCardPickElement(card: Card) {
        return <CardPick key={card.uuid} onClick={() => { this.makePick(card) } } imageUrl={card.imageUrl} />
    }

    getCardImageElement(card: Card) {
        return <CardImage key={card.uuid} url={card.imageUrl} />
    }

    render() {
        return (
            <div className="page-container">
                {this.state.pack.cards.length > 0 &&
                    <div className="row">
                        <div className="col-md-12"><h2>Pack {this.state.packNumber}</h2></div>
                        <div className="col-md-12 draft-pack">
                            {_.map(this.state.pack.cards, card => this.getCardPickElement(card))}
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-md-12"><h2>Picks</h2></div>
                    <div className="col-md-12 draft-picks">
                        {_.map(this.state.picks, card => this.getCardImageElement(card))}
                    </div>
                </div>
            </div>
        );
    }
}