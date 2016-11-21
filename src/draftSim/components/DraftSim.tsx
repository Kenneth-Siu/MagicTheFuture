import * as React from "react";
import * as _ from "lodash";
import Player from "../Player";
import Pack from "../Pack";
import Card from "../../common/Card";
import CardPick from "./CardPick";
import CardImage from "../../common/components/CardImage";
import * as uuid from "uuid";

interface DraftSimState { pack: Pack, picks: Card[] };

export interface DraftSimProps { }

export default class DraftSim extends React.Component<DraftSimProps, {}> {

    state: DraftSimState;
    humanPlayer: Player;
    computerPlayers: Player[];

    constructor() {
        super();
        this.computerPlayers = Player.initTableOfPlayers();
        this.humanPlayer = this.computerPlayers.shift();
        this.state = {
            pack: this.humanPlayer.nextPack,
            picks: []
        };
    }

    makePick(card: Card) {
        this.humanPlayer.makePick(card);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.computerPick();
            computerPlayer.passPackLeft();
        }
        this.humanPlayer.passPackLeft();
        this.setState({
            pack: this.humanPlayer.nextPack,
            picks: this.humanPlayer.picks
        });
    }

    getCardPickElement(card: Card) {
        return <CardPick key={uuid.v4()} onClick={() => {this.makePick(card)}} imageUrl={card.imageUrl} />
    }

    getCardImageElement(card: Card) {
        return <CardImage url={card.imageUrl} />
    }

    render() {
        return (
            <div className="page-container">
                <div className="draft-pack">
                    {_.map(this.state.pack.cards, card => this.getCardPickElement(card))}
                </div>
                <div className="draft-picks">
                    {_.map(this.state.picks, card => this.getCardImageElement(card))}
                </div>
            </div>
        );
    }
}