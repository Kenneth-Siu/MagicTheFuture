import * as React from "react";
import * as constants from "../constants";

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
                            <li className={this.props.activePage === constants.visualSpoiler.uuid && "active"}><a href={constants.visualSpoiler.url}>{constants.visualSpoiler.pageName}</a></li>
                            <li className={this.props.activePage === constants.draftSim.uuid && "active"}><a href={constants.draftSim.url}>{constants.draftSim.pageName}</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}