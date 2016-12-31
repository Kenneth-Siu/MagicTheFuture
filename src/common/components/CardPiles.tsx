import * as React from "react";
import * as _ from "lodash";
import Card from "../Card";
import CardImage from "./CardImage";

export interface CardPilesProps {
    piles: Card[][],
    onClick?: (card: Card) => void,
    onMouseEnter?: (card: Card) => void,
    onMouseLeave?: () => void
}

export default class CardPiles extends React.Component<CardPilesProps, {}> {

    render() {
        return (
            <div className={`card-piles size-of-largest-pile-${_.max(this.props.piles.map(pile => pile.length))}`}>
                {_.map(this.props.piles, (pile, index) => this.getPileElement(pile, index))}
            </div>
        );
    }

    private getPileElement(pile: Card[], index: number): JSX.Element {
        return (
            <div className="pile" key={index}>
                {_.map(pile, (card, index) => this.getPileCardImageElement(card, index))}
            </div>
        );
    }

    private getPileCardImageElement(card: Card, index: number): JSX.Element {
        return (
            <div onClick={() => { if (this.props.onClick) this.props.onClick(card); } }
                onMouseEnter={() => { if (this.props.onMouseEnter) this.props.onMouseEnter(card) } }
                onMouseLeave={() => { if (this.props.onMouseLeave) this.props.onMouseLeave() } }>

                <CardImage key={card.uuid} url={card.imageUrl} additionalClasses={`pile-index-${index}`} />
            </div>
        );
    }
}