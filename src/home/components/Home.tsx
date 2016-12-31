import * as React from "react";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import Card from "../../common/Card";
import HighlightBox from "./HighlightBox";
import getCard from "../../common/getCard";

export interface HomeProps { }

export default class Home extends React.Component<HomeProps, {}> {

    cards: Card[];

    constructor() {
        super();
        this.cards = [
            getCard("The Hemera"),
            getCard("Titan of Shisuku Sewers"),
            getCard("Radiation Strike"),
            getCard("Umida Incorporated")
        ];
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.home.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Magic: the Convergence</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p><i>Humanity's back at it again. You'd think it would have grown out of it by now, but no, it's gone ahead and started another world war, and it's not as if it didn't already have enough problems to deal with. Well, more work for you, then, commander.</i></p>
                        </div>
                        <div className="col-md-4">
                            <HighlightBox cards={this.cards} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
