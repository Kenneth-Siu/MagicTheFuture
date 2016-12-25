import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { primer, draftSim } from "../../common/constants";
import CardImage from "../../common/components/CardImage";
import ColorPairPrimer from "../ColorPairPrimer";
import { colorPairPrimers } from "../constants";

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
                            <div className="col-md-12">
                                <h2>{colorPairPrimer.title}</h2>
                                {colorPairPrimer.descriptionParagraphs}
                            </div>
                        </div>
                    ))}
                    <div className="row try-a-draft">
                        <div className="col-md-12 text-center">
                            <a href={draftSim.url} className="btn btn-default btn-lg">Why not try a draft?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
