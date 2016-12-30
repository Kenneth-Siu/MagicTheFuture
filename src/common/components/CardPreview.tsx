import * as React from "react";
import CardImage from "./CardImage";

export interface CardPreviewProps { url: string }

export default class CardPreview extends React.Component<CardPreviewProps, {}> {
    render() {
        return (
            <div className="card-preview">
                {this.props.url && <CardImage url={this.props.url} />}
            </div>);
    }
}