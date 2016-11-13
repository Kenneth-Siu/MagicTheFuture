import * as React from "react";
import CardDiv from "./CardDiv";
import cardList from "../cardList";
import * as _ from "lodash";
import Card from "../Card";
import CardGridFilters from "./CardGridFilters";
import {ColorFilter} from "../ColorFilter";

export interface CardGridProps {}

interface CardGridState {
    displayedCardElementsList: JSX.Element[];
}

export default class CardGrid extends React.Component<CardGridProps, {}> {

    state: CardGridState

    constructor() {
        super();
        this.state = {
            displayedCardElementsList: _.map(cardList, card => this.getCardElement(card))
        };
    }

    getCardElement(card: Card) {
        return <CardDiv key={card.id} name={card.name} imageUrl={card.imageUrl} />;
    }

    handleFilterChange(colorFilter: ColorFilter) {
        console.log(this.state);
        const filteredCardList = _.filter(cardList, card => colorFilter.showCard(card));
        const filteredCardElementsList = _.map(filteredCardList, card => this.getCardElement(card));
        this.setState({displayedCardElementsList: filteredCardElementsList});
    }

    render() {
        return (
            <div>
                <CardGridFilters onFilterChange={(colorFilter: ColorFilter) => { this.handleFilterChange(colorFilter); }} />
                {this.state.displayedCardElementsList}
            </div>
        );
    }
}