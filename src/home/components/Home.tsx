import * as React from "react";
import * as _ from "lodash";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";

export interface HomeProps { }

export default class Home extends React.Component<HomeProps, {}> {

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.home.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            Hello
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
