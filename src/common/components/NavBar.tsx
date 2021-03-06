import * as React from "react";
import * as _ from "lodash";
import { siteMapDictionary, siteMapArray } from "../siteMap";

const favicon = `../dist/${require("../../../favicon.png") as string}`;

export interface NavBarProps { activePage: string }

export default class NavBar extends React.Component<NavBarProps, {}> {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>

                    <div className="collapse navbar-collapse" id="navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li>
                                <a className="navbar-brand" href={siteMapDictionary.home.url}>
                                    <img className="home-icon" src={favicon} />
                                </a>
                            </li>
                            {_.map(siteMapArray, page => (<li className={this.props.activePage === page.uuid && "active"}><a href={page.url}>{page.pageName}</a></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}