import * as React from "react";
import * as _ from "lodash";
import CardImage from "../../common/components/CardImage";

export interface CardPickProps {
    onClick: () => void;
    imageUrl: string;
    showAIRatings: boolean;
    rating: number;
}

export default class CardPick extends React.Component<CardPickProps, {}> {
    render() {
        return (
            <div onClick={this.props.onClick}>
                <CardImage url={this.props.imageUrl} />
                {this.props.showAIRatings && <div className="pick-rating">{_.round(this.props.rating, 3)}</div>}
            </div>
        );
    }
}