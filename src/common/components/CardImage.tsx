import * as React from "react";

export interface CardImageProps {
    url: string,
    additionalClasses?: string,
    onMouseEnter?: () => void
}

export default class CardImage extends React.Component<CardImageProps, {}> {
    render() {
        return <img src={this.props.url}
            className={`card${this.props.additionalClasses && (" " + this.props.additionalClasses) || ""}`}
            onMouseEnter={() => { if (this.props.onMouseEnter) this.props.onMouseEnter() } } />;
    }
}