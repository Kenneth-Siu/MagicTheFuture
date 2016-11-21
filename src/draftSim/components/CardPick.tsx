import * as React from "react";
import CardImage from "../../common/components/CardImage";

export interface CardPickProps { onClick: () => void, imageUrl: string }

export default class CardPick extends React.Component<CardPickProps, {}> {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <CardImage url={this.props.imageUrl} />
            </div>
        );
    }
}