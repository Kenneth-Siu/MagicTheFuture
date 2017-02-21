import * as React from "react";
import * as _ from "lodash";
import cardList from "../../common/cardList";
import tokensList from "../tokensList";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import CardForPrinting from "../components/CardForPrinting";


export interface PrintingProps { }

export default class Printing extends React.Component<PrintingProps, {}> {

    printingCardListUrls: string[];

    constructor() {
        super();
        this.printingCardListUrls = _.flatten(cardList.map(card => {
            if (card.rarity === "C") {
                return [card.imageUrl, card.imageUrl, card.imageUrl, card.imageUrl];
            }
            if (card.rarity === "U") {
                return [card.imageUrl, card.imageUrl];
            }
            return card.imageUrl;
        }));
        this.printingCardListUrls.push(...tokensList);
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.primer.uuid} />
                <div className="print-button">
                    <button className="btn btn-default" onClick={window.print}>Print</button>
                </div>
                {this.printingCardListUrls.map(url => <CardForPrinting imageUrl={url} />)}
            </div>
        );
    }
}
