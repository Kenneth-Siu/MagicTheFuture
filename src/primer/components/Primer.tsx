import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { primer } from "../../common/constants";
import CardImage from "../../common/components/CardImage";
import ColorPairPrimer from "../ColorPairPrimer";
import {colorPairPrimers} from "../constants";

export interface PrimerProps { }

export default class Primer extends React.Component<PrimerProps, {}> {

    colorPairPrimers: ColorPairPrimer[];

    constructor() {
        super();
        this.colorPairPrimers = colorPairPrimers;
    }

    render() {
        return (
            <div>
                <NavBar activePage={primer.uuid} />
                <div className="page-container">
                    {this.colorPairPrimers.map(colorPairPrimer => (
                        <div className="row" key={colorPairPrimer.title}>
                            <div className="col-md-12"><h2>{colorPairPrimer.title}</h2></div>
                            <div className="col-md-6 preview-cards">
                                {colorPairPrimer.previewCards.map(card => (
                                    <CardImage url={card.imageUrl} key={card.id} />
                                ))}
                            </div>
                            <div className="col-md-6">
                                {colorPairPrimer.descriptionParagraphs}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}