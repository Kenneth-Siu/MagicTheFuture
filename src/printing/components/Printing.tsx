import * as React from "react";
import * as _ from "lodash";
import Card from "../../common/Card";
import cardList from "../../common/cardList";
import tokensList from "../tokensList";
import updatesList from "../updatesList";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import CardForPrinting from "../components/CardForPrinting";

interface PrintingState {
    type: "All" | "Cards" | "Tokens" | "Updates";
}

export default class Printing extends React.Component<{}, {}> {

    state: PrintingState;
    allUrls: string[];
    cardUrls: string[];
    tokenUrls: string[];
    updateUrls: string[]

    constructor() {
        super();
        this.state = {
            type: "All"
        };
        this.cardUrls = _.flatten(cardList.map(card => {
            if (card.rarity === "C") {
                return [card.imageUrl, card.imageUrl, card.imageUrl, card.imageUrl];
            }
            if (card.rarity === "U") {
                return [card.imageUrl, card.imageUrl];
            }
            return card.imageUrl;
        }));
        this.tokenUrls = tokensList;

        this.allUrls = [];
        this.allUrls.push(...this.cardUrls);
        this.allUrls.push(...this.tokenUrls);

        this.updateUrls = _.filter(this.cardUrls, cardUrl => { return updatesList.some(updateCardUrl => updateCardUrl === cardUrl); });
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.printing.uuid} />
                <div className="print-buttons">
                    <button className="btn btn-default" onClick={window.print}>Print</button>
                    <button className="btn btn-default" onClick={this.changeDisplayedType}>{this.state.type}</button>
                </div>
                {this.getCardList()}
            </div>
        );
    }

    private getCardList = () => {
        switch (this.state.type) {
            case "All":
                return this.allUrls.map(url => <CardForPrinting imageUrl={url} />);
            case "Cards":
                return this.cardUrls.map(url => <CardForPrinting imageUrl={url} />);
            case "Tokens":
                return this.tokenUrls.map(url => <CardForPrinting imageUrl={url} />);
            case "Updates":
                return this.updateUrls.map(url => <CardForPrinting imageUrl={url} />);
            default:
                return this.allUrls.map(url => <CardForPrinting imageUrl={url} />);
        }
    }

    private changeDisplayedType = () => {
        switch (this.state.type) {
            case "All":
                this.setState({ type: "Cards" });
                return;
            case "Cards":
                this.setState({ type: "Tokens" });
                return;
            case "Tokens":
                this.setState({ type: "Updates" });
                return;
            case "Updates":
                this.setState({ type: "All" });
                return;
            default:
                this.setState({ type: "All" });
                return;
        }
    }
}
