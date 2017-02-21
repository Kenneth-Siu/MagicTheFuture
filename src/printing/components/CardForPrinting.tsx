import * as React from "react";
import CardImage from "../../common/components/CardImage";

export interface CardDivProps { imageUrl: string }

export default class CardDiv extends React.Component<CardDivProps, {}> {
    render() {
        return (
            <div className="printing-card">
                <CardImage url={this.props.imageUrl} />
            </div>
        );
    }
}