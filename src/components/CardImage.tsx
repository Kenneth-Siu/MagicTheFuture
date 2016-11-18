import * as React from "react";

export interface CardImageProps { url: string }

export default class CardImage extends React.Component<CardImageProps, {}> {
    render() {
        return <img className="spoiler-card" src={this.props.url} />;
    }
}