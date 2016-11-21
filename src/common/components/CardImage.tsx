import * as React from "react";

export interface CardImageProps { url: string }

export default class CardImage extends React.Component<CardImageProps, {}> {
    render() {
        return <img className="card" src={this.props.url} />;
    }
}