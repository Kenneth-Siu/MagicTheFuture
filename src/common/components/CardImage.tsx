import * as React from "react";

export interface CardImageProps { url: string, additionalClasses?: string }

export default class CardImage extends React.Component<CardImageProps, {}> {
    render() {
        return <img className={`card${this.props.additionalClasses && (" " + this.props.additionalClasses) || ""}`} src={this.props.url} />;
    }
}