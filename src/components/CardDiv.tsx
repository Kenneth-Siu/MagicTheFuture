import * as React from "react";
import CardImage from "./CardImage";

export interface CardDivProps { name: string, imageUrl: string }

export default class CardDiv extends React.Component<CardDivProps, {}> {
    render() {
        return (
            <div className="col-md-3 spoiler-card">
                <CardImage url={this.props.imageUrl} />
                <div>{this.props.name}</div>
            </div>
        );
    }
}