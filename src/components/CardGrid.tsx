import * as React from "react";
import CardDiv from "./CardDiv";
import cardList from "../cardList";
import * as _ from "lodash";
import Card from "../Card";

export interface CardGridProps {}

export default class CardGrid extends React.Component<CardGridProps, {}> {

    getCardElement(card: Card) {
        return <CardDiv name={card.name} imageUrl={card.imageUrl} />;
    }

    render() {
        return (
            <div>
                { _.map(cardList, card => this.getCardElement(card) )}
            </div>
        );
    }
}