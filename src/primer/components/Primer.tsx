import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import ColorPairPrimer from "../ColorPairPrimer";
import { colorPairPrimers } from "../constants";

const mtgM = `../dist/${require(`../resources/images/mtgM.png`) as string}`;

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
                <NavBar activePage={siteMapDictionary.primer.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>Draft Primer</h1>
                            <p>This page is here to hopefully get you up and running on the draft format.</p>
                            <p className="bg-info info-box"><img src={mtgM} className="mtg-m" /> Magic: the Gathering players, look out for these boxes. They're there to help you bridge the terminology gap between the two.</p>
                            <p>If you're looking for a particular color-pair, you should probably use the contents box. In an effort to make reading this pleasant, I've reordered the color-pairs to introduce concepts a little at a time.</p>
                        </div>
                        <div className="col-md-3 contents">
                            <h4 className="text-center">Contents</h4>
                            <ol>
                                {this.colorPairPrimers.map(colorPairPrimer => (
                                    <li><a href={`#${colorPairPrimer.id}`}>{colorPairPrimer.title}</a></li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    {this.colorPairPrimers.map(colorPairPrimer => (
                        <div className="row" key={colorPairPrimer.title}>
                            <div className="col-md-12">
                                <div>
                                    <h2 id={colorPairPrimer.id}>{colorPairPrimer.title}</h2>
                                </div>
                                {colorPairPrimer.descriptionParagraphs}
                            </div>
                        </div>
                    ))}
                    <div className="row try-a-draft">
                        <div className="col-md-12 text-center">
                            <a href={siteMapDictionary.draftSim.url} className="btn btn-default btn-lg">Why not try a draft?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
