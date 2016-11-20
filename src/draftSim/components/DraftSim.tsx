import * as React from "react";

interface CardGridState { };

export interface DraftSimProps { }

export default class DraftSim extends React.Component<DraftSimProps, {}> {

    state: CardGridState;

    constructor() {
        super();
    }

    render() {
        return (
            <div className="page-container">
                Hello world!
            </div>
        );
    }
}