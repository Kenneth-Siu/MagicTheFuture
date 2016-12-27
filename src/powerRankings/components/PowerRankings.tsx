import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";

export interface PowerRankingsProps { }

export default class PowerRankings extends React.Component<PowerRankingsProps, {}> {

    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.powerRankings.uuid} />
                <div className="page-container">
                    
                </div>
            </div>
        );
    }
}
