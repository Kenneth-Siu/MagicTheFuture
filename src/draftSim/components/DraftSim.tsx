import * as React from "react";
import * as _ from "lodash";
import Player from "../Player";
import Card from "../../common/Card";
import CardPick from "./CardPick";
import CardImage from "../../common/components/CardImage";
import CardRating from "../CardRating";
import CardPicker from "../CardPicker";
import { ColorPreferences } from "../CardPicker";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import CardPiles from "../../common/components/CardPiles";
import CardPreview from "../../common/components/CardPreview";

export type PassDirection = "left" | "right";

interface DraftSimState {
    pack: CardRating[];
    packNumber: number;
    picks: Card[][];
    sideboard: Card[][];
    computerColorPreferences: ColorPreferences[];
    computerPicks: Card[][][];
    showAIRatings: boolean;
    showAIPicks: boolean;
    hoveredCardUrl: string;
};

export default class DraftSim extends React.Component<{}, {}> {

    state: DraftSimState;
    cardPicker: CardPicker;
    humanPlayer: Player;
    computerPlayers: Player[];
    passDirection: PassDirection;

    constructor() {
        super();
        this.cardPicker = new CardPicker();
        this.computerPlayers = Player.createTableOfPlayers();
        this.humanPlayer = this.computerPlayers.shift();
        this.state = {
            pack: this.humanPlayer.nextPack.cards.map(card => {
                return this.cardPicker.evaluateCard(this.humanPlayer.picks, card);
            }),
            packNumber: 1,
            picks: this.pilify([]),
            sideboard: this.pilify([]),
            computerColorPreferences: this.computerPlayers.map(player => player.getColorPreferences()),
            computerPicks: [this.pilify([]), this.pilify([]), this.pilify([]), this.pilify([]), this.pilify([]), this.pilify([]), this.pilify([])],
            showAIRatings: false,
            showAIPicks: false,
            hoveredCardUrl: null
        };
        this.passDirection = "left";
    }

    render(): JSX.Element {
        const suggestedPick = _.maxBy(this.state.pack, card => card.rating);
        return (
            <div>
                <NavBar activePage={siteMapDictionary.draftSim.uuid} />
                <div className="page-container">
                    {this.state.pack.length > 0 &&
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Pack {this.state.packNumber} ({this.state.pack.length} cards) <small>Click a card to add it to your deck</small></h2>
                            </div>
                            <div className="col-md-12 draft-pack">
                                {_.map(this.state.pack, card => this.getCardPickElement(card, card === suggestedPick))}
                            </div>
                        </div>
                    }
                    {this.state.pack.length > 0 &&
                        <div className="row">
                            <div className="col-md-12 suggest-pick">
                                <h2><a className="btn btn-default btn-lg" onClick={() => this.toggleSuggestions()}>{this.state.showAIRatings ? "Hide suggestion" : "Suggest Pick"}</a></h2>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col-md-12"><h2>Deck ({this.state.picks.reduce((total, pile) => total + pile.length, 0)}) <small>Click a card to move it to your sideboard</small></h2></div>
                        <div className="col-md-12">
                            <CardPiles piles={this.state.picks}
                                onClick={(card) => this.moveFromPicksToSideboard(card)}
                                onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                                onMouseLeave={() => this.handleMouseLeavePileCard()} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12"><h2>Sideboard ({this.state.sideboard.reduce((total, pile) => total + pile.length, 0)}) <small>Click a card to move it to your deck</small></h2></div>
                        <div className="col-md-12">
                            <CardPiles piles={this.state.sideboard}
                                onClick={(card) => this.moveFromSideboardToPicks(card)}
                                onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                                onMouseLeave={() => this.handleMouseLeavePileCard()} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 toggle-ai-picks">
                            <h2><a className="btn btn-default btn-lg" onClick={() => this.toggleAIPicks()}>{this.state.showAIPicks ? "Hide AI Picks" : "Show AI Picks"}</a></h2>
                        </div>
                    </div>
                    {this.state.showAIPicks && this.state.computerPicks.map((aiPicks, index) =>
                        <div className="row" key={index}>
                            <div className="col-md-12"><h2>AI {index}&nbsp;—&nbsp;
                            W:{_.round(this.state.computerColorPreferences[index].white, 3)}&nbsp;
                            U:{_.round(this.state.computerColorPreferences[index].blue, 3)}&nbsp;
                            B:{_.round(this.state.computerColorPreferences[index].black, 3)}&nbsp;
                            R:{_.round(this.state.computerColorPreferences[index].red, 3)}&nbsp;
                            G:{_.round(this.state.computerColorPreferences[index].green, 3)}&nbsp;
                            </h2></div>
                            <div className="col-md-12">
                                <CardPiles piles={aiPicks}
                                    onMouseEnter={(card) => this.handleMouseEnterPileCard(card)}
                                    onMouseLeave={() => this.handleMouseLeavePileCard()} />
                            </div>
                        </div>
                    )}
                </div>
                <CardPreview url={this.state.hoveredCardUrl} />
            </div>
        );
    }

    private pilify(cards: Card[]): Card[][] {
        const alphetisedCards = _.sortBy(cards, card => card.name);
        return this.splitIntoCmcPiles(alphetisedCards).map(pile => this.sortByColor(pile));
    }

    private splitIntoCmcPiles(cards: Card[]): Card[][] {
        const piles: Card[][] = [[], [], [], [], [], [], [], []];
        cards.forEach(card => {
            if (card.cmc === "X" || card.cmc === 0) piles[7].push(card);
            else if (card.cmc >= 7) piles[6].push(card);
            else piles[card.cmc - 1].push(card);
        });
        return piles;
    }

    private sortByColor(cards: Card[]): Card[] {
        return cards.sort((a, b) => {
            const wubrg = "WUBRG";
            let A: number, B: number;

            if (a.color.length === 0) A = 5;
            else if (a.color.length > 1) A = 6;
            else A = wubrg.indexOf(a.color);

            if (b.color.length === 0) B = 5;
            else if (b.color.length > 1) B = 6;
            else B = wubrg.indexOf(b.color);

            return A - B;
        });
    }

    private makePick(card: Card): void {
        this.humanPlayer.makePick(card);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.computerPick();
        }
        this.hideSuggestions();
        this.humanPlayer.passPack(this.passDirection);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.passPack(this.passDirection);
        }
        if (this.humanPlayer.nextPack.cards.length === 0 && this.state.packNumber < 3) {
            this.humanPlayer.openPack();
            for (const computerPlayer of this.computerPlayers) {
                computerPlayer.openPack();
            }
            this.passDirection = this.passDirection === "left" ? "right" : "left";
            this.setState({ packNumber: this.state.packNumber + 1 });
        }
        this.updatePackState();
        this.updatePicksState();
        this.setState({
            computerColorPreferences: this.computerPlayers.map(computerPlayer => computerPlayer.getColorPreferences()),
            computerPicks: this.computerPlayers.map(computerPlayer => this.pilify(computerPlayer.picks))
        });
    }

    private toggleSuggestions(): void {
        this.setState({
            showAIRatings: !this.state.showAIRatings
        });
    }

    private hideSuggestions(): void {
        this.setState({
            showAIRatings: false
        });
    }

    private moveFromPicksToSideboard(card: Card): void {
        this.humanPlayer.moveFromPicksToSideboard(card);
        this.updatePackState();
        this.updatePicksState();
        this.updateSideboardState();
    }

    private moveFromSideboardToPicks(card: Card): void {
        this.humanPlayer.moveFromSideboardToPicks(card);
        this.updatePackState();
        this.updatePicksState();
        this.updateSideboardState();
    }

    private updatePackState() {
        this.setState({
            pack: this.humanPlayer.nextPack.cards.map(card => {
                return this.cardPicker.evaluateCard(this.humanPlayer.picks, card);
            })
        });
    }

    private updatePicksState() {
        this.setState({
            picks: this.pilify(this.humanPlayer.picks)
        });
    }

    private updateSideboardState() {
        this.setState({
            sideboard: this.pilify(this.humanPlayer.sideboard)
        });
    }

    private toggleAIPicks() {
        this.setState({
            showAIPicks: !this.state.showAIPicks
        });
    }

    private getCardPickElement(card: CardRating, isSuggested: boolean): JSX.Element {
        return <CardPick
            key={card.card.uuid}
            onClick={() => { this.makePick(card.card) } }
            imageUrl={card.card.imageUrl}
            showAIRatings={this.state.showAIRatings}
            rating={card.rating}
            isSuggestedPick={isSuggested} />
    }

    private handleMouseEnterPileCard(card: Card) {
        this.setState({ hoveredCardUrl: card.imageUrl });
    }

    private handleMouseLeavePileCard() {
        this.setState({ hoveredCardUrl: null });
    }
}