import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import Card from "../../common/Card";
import { siteMapDictionary } from "../../common/siteMap";
import CardPiles from "../../common/components/CardPiles";
import CardPreview from "../../common/components/CardPreview";
import cardList from "../../common/cardList";

export interface PowerRankingsProps { }

interface PowerRankingsState {
    hoveredCardUrl: string;
    cardPotentialPiles: Card[][];
    cardPowerPiles: Card[][];
};

export default class PowerRankings extends React.Component<PowerRankingsProps, {}> {

    state: PowerRankingsState;

    constructor() {
        super();

        const cardPotentialPiles: Card[][] = [];
        const cardPowerPiles: Card[][] = [];

        for (let i = 0; i <= 5; i += 0.5) {
            cardPotentialPiles.push([]);
            cardPowerPiles.push([]);
        }

        cardList.forEach(card => {
            const cardPotential = _.clamp(card.notes.potential || card.notes.power, 0, 5);
            const cardPower = _.clamp(card.notes.power, 0, 5);
            const cardPotentialPileNumber = Math.floor(cardPotential * 2);
            cardPotentialPiles[cardPotentialPileNumber].push(card);
            const cardPowerPileNumber = Math.floor(cardPower * 2);
            cardPowerPiles[cardPowerPileNumber].push(card);
        });

        this.state = {
            hoveredCardUrl: null,
            cardPotentialPiles: cardPotentialPiles,
            cardPowerPiles: cardPowerPiles
        };
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.powerRankings.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Card rating in fully synergistic deck</h3>
                            <div className="pile-labels">
                                {this.state.cardPotentialPiles.map((pile, index) => <div><h4>{(index / 2).toFixed(1)}</h4></div>)}
                            </div>
                            <CardPiles piles={this.state.cardPotentialPiles}
                                onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                                onMouseLeave={() => this.handleMouseLeavePileCard()} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h3>Card rating in completely <u>un</u>synergistic deck</h3>
                            <div className="pile-labels">
                                {this.state.cardPowerPiles.map((pile, index) => <div><h4>{(index / 2).toFixed(1)}</h4></div>)}
                            </div>
                            <CardPiles piles={this.state.cardPowerPiles}
                                onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                                onMouseLeave={() => this.handleMouseLeavePileCard()} />
                        </div>
                    </div>
                </div>
                <CardPreview url={this.state.hoveredCardUrl} />
            </div>
        );
    }

    private handleMouseEnterPileCard(card: Card) {
        this.setState({ hoveredCardUrl: card.imageUrl });
    }

    private handleMouseLeavePileCard() {
        this.setState({ hoveredCardUrl: null });
    }
}
