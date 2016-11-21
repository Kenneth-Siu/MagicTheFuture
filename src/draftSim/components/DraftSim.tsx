import * as React from "react";
import * as _ from "lodash";
import Player from "../Player";
import Card from "../../common/Card";
import CardImage from "../../common/components/CardImage";

interface CardGridState { };

export interface DraftSimProps { }

export default class DraftSim extends React.Component<DraftSimProps, {}> {

    state: CardGridState;
    player: Player;

    constructor() {
        super();
        this.player = new Player();
    }

    getCardImageElement(card: Card) {
        return <CardImage url={card.imageUrl} />
    }

    render() {
        return (
            <div className="page-container">
                {_.map(this.player.pack.cards, card => this.getCardImageElement(card))}
            </div>
        );
    }
}