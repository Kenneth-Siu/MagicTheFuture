import * as React from "react";
import * as _ from "lodash";
import cardList from "../cardList";
import CardGridFilters from "./CardGridFilters";
import {ColorFilter} from "../ColorFilter";
import Card from "../Card";
import CardDiv from "./CardDiv";

export interface CardGridProps {}

interface CardGridState {
    displayedCardElementsList: JSX.Element[];
}

export default class CardGrid extends React.Component<CardGridProps, {}> {

    state: CardGridState;

    constructor() {
        super();
        this.state = {
            displayedCardElementsList: this.getCardGridElements(cardList)
        }
    }

    handleFilterChange(colorFilter: ColorFilter) {
        const filteredCardList = _.filter(cardList, card => colorFilter.showCard(card));
        this.setState({displayedCardElementsList: this.getCardGridElements(filteredCardList)});
    }

    getCardGridElements(cards: Card[]) {
        return _.map(cards, card => <CardDiv key={card.id} name={card.name} imageUrl={card.imageUrl} />);
    }

    render() {
        return (
            <div className="page-container">
                <div className="row">
                    <div className="col-md-12">
                        <CardGridFilters onFilterChange={(colorFilter: ColorFilter) => { this.handleFilterChange(colorFilter); }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 spoiler-grid-cards">
                        {this.state.displayedCardElementsList}
                    </div>
                </div>
            </div>
        );
    }
}