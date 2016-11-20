import * as React from "react";
import * as _ from "lodash";
import CardDiv from "./CardDiv";
import Card from "../Card";

export interface CardGridRowProps { cards: Card[] }

export default class CardGrid extends React.Component<CardGridRowProps, {}> {

    cardElements: JSX.Element[];

    constructor(props: CardGridRowProps) {
        super(props);
        this.cardElements = _.map(props.cards, card => this.getCardElement(card));
    }

    getCardElement(card: Card) {
        return <CardDiv key={card.id} name={card.name} imageUrl={card.imageUrl} />;
    }

    render() {
        return (
            <div className="row">
                {this.cardElements}
            </div>
        );
    }
}