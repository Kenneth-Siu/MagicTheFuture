import * as React from "react";
import * as _ from "lodash";
import CardImage from "../../common/components/CardImage";

export interface CardPickProps {
    onClick: () => void;
    imageUrl: string;
    showAIRatings: boolean;
    rating: number;
    isSuggestedPick: boolean;
}

export default class CardPick extends React.Component<CardPickProps, {}> {
    render() {
        return (
            <div onClick={this.props.onClick} className={this.props.isSuggestedPick && this.props.showAIRatings && "suggested-pick"}>
                <CardImage url={this.props.imageUrl} />
                {this.props.showAIRatings && <div className="pick-rating">{this.props.rating.toFixed(3)}</div>}
            </div>
        );
    }
}