import * as React from "react";
import cardList from "../cardList";
import * as _ from "lodash";
import CardGridFilters from "./CardGridFilters";
import {ColorFilter} from "../ColorFilter";
import Card from "../Card";
import CardGridRow from "./CardGridRow";

export interface CardGridProps {}

interface CardGridState {
    displayedCardElementsList: JSX.Element[];
}

export default class CardGrid extends React.Component<CardGridProps, {}> {

    constructor() {
        super();
        this.state = {
            displayedCardElementsList: this.getCardRowElementsList(cardList)
        }
    }

    state: CardGridState;
    displayedCardGridRowsList: JSX.Element[];

    handleFilterChange(colorFilter: ColorFilter) {
        const filteredCardList = _.filter(cardList, card => colorFilter.showCard(card));
        this.setState({displayedCardElementsList: this.getCardRowElementsList(filteredCardList)});
    }

    getCardRowElementsList(cards: Card[]) {
        return _.map(this.getCardRowsList(cards), cardRow => this.getCardGridRowElement(cardRow));
    }

    getCardRowsList(cards: Card[]) {
        const cardRowsList: Card[][] = [];
        let cardRow: Card[] = [];
        _.forEach(cards, card => {
            cardRow.push(card);
            if (cardRow.length >= 4) {
                cardRowsList.push(cardRow);
                cardRow = [];
            }
        })
        if (cardRow.length > 0) {
            cardRowsList.push(cardRow);
        }
        return cardRowsList;
    }

    getCardGridRowElement(cards: Card[]) {
        return <CardGridRow key={`${_.map(cards, card => card.id)}`} cards={cards}></CardGridRow>;
    }

    render() {
        return (
            <div className="page-container">
                <div className="row">
                    <div className="col-md-12 spoiler-grid-filters">
                        <CardGridFilters onFilterChange={(colorFilter: ColorFilter) => { this.handleFilterChange(colorFilter); }} />
                    </div>
                </div>
                {this.state.displayedCardElementsList}
            </div>
        );
    }
}