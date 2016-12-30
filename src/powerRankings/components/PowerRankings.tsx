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
    piles: Card[][];
};

export default class PowerRankings extends React.Component<PowerRankingsProps, {}> {

    state: PowerRankingsState;

    constructor() {
        super();

        const piles: Card[][] = [[], [], [], [], [], [], [], [], [], [], []];

        cardList.forEach(card => {
            const cardPotential = _.clamp(card.notes.potential || card.notes.power, 0, 5);
            const cardPile = Math.floor(cardPotential * 2);
            piles[cardPile].push(card);
        });

        this.state = {
            hoveredCardUrl: null,
            piles: piles
        };
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.powerRankings.uuid} />
                <div className="page-container">
                    <CardPiles piles={this.state.piles}
                        onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                        onMouseLeave={() => this.handleMouseLeavePileCard()} />
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
