import * as React from "react";
import Card from "../../common/Card";
import CardImage from "../../common/components/CardImage";

export interface HighlightBoxProps {
    cards: Card[];
}

interface HighlightBoxState {
    mainDisplayCard: Card;
}

export default class HighlightBox extends React.Component<HighlightBoxProps, {}> {

    state: HighlightBoxState;

    constructor(props: HighlightBoxProps) {
        super(props);
        this.state = {
            mainDisplayCard: this.props.cards.length > 0 ? this.props.cards[0] : null
        };
    }

    render() {
        return (
            <div>
                <div className="text-center">
                    <CardImage url={this.state.mainDisplayCard.imageUrl} />
                </div>
                <div className="highlighted-cards-reel text-center">
                    {this.props.cards.map(card => <CardImage url={card.imageUrl} onMouseEnter={() => this.highlightCard(card)} />)}
                </div>
            </div>
        );
    }

    private highlightCard(card: Card): void {
        this.setState({ mainDisplayCard: card });
    }
}
