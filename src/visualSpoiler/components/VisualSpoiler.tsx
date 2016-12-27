import * as React from "react";
import * as _ from "lodash";
import cardList from "../../common/cardList";
import CardGridFilters from "./CardGridFilters";
import { ColorFilter } from "../ColorFilter";
import Card from "../../common/Card";
import CardDiv from "./CardDiv";
import NavBar from "../../common/components/NavBar";
import {siteMapDictionary} from "../../common/siteMap";

export interface VisualSpoilerProps { }

interface VisualSpoilerState {
    displayedCardElementsList: JSX.Element[];
}

export default class VisualSpoiler extends React.Component<VisualSpoilerProps, {}> {

    state: VisualSpoilerState;

    constructor() {
        super();
        this.state = {
            displayedCardElementsList: this.getCardGridElements(cardList)
        }
    }

    handleFilterChange(colorFilter: ColorFilter) {
        const filteredCardList = _.filter(cardList, card => colorFilter.showCard(card));
        this.setState({ displayedCardElementsList: this.getCardGridElements(filteredCardList) });
    }

    getCardGridElements(cards: Card[]) {
        return _.map(cards, card => <CardDiv key={card.id} name={card.name} imageUrl={card.imageUrl} />);
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.visualSpoiler.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            <CardGridFilters onFilterChange={(colorFilter: ColorFilter) => { this.handleFilterChange(colorFilter); } } />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 spoiler-grid-cards">
                            {this.state.displayedCardElementsList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}