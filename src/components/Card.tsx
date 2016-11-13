import * as React from "react";
import CardImage from "./CardImage";

export interface CardProps { name: string, imageUrl: string }

export default class Card extends React.Component<CardProps, {}> {
    render() {
        return (
            <div>
                <CardImage url={this.props.imageUrl} />
                <div>{this.props.name}</div>
            </div>
        );
    }
}