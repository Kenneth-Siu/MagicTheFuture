import * as React from "react";
import * as _ from "lodash";
import Player from "../Player";
import Pack from "../Pack";
import Card from "../../common/Card";
import CardPick from "./CardPick";
import CardImage from "../../common/components/CardImage";

export type PassDirection = "left" | "right";

interface DraftSimState { pack: Pack, packNumber: number, picks: Card[][], computerPicks: Card[][][] };

export interface DraftSimProps { }

export default class DraftSim extends React.Component<DraftSimProps, {}> {

    state: DraftSimState;
    humanPlayer: Player;
    computerPlayers: Player[];
    passDirection: PassDirection;

    constructor() {
        super();
        this.computerPlayers = Player.createTableOfPlayers();
        this.humanPlayer = this.computerPlayers.shift();
        this.state = {
            pack: this.humanPlayer.nextPack,
            packNumber: 1,
            picks: this.splitIntoCmcPiles([]),
            computerPicks: [this.splitIntoCmcPiles([]), this.splitIntoCmcPiles([]), this.splitIntoCmcPiles([]), this.splitIntoCmcPiles([]), this.splitIntoCmcPiles([]),
            this.splitIntoCmcPiles([]), this.splitIntoCmcPiles([])]
        };
        this.passDirection = "left";
    }

    render(): JSX.Element {
        return (
            <div className="page-container">
                {this.state.pack.cards.length > 0 &&
                    <div className="row">
                        <div className="col-md-12"><h2>Pack {this.state.packNumber}</h2></div>
                        <div className="col-md-12 draft-pack">
                            {_.map(this.state.pack.cards, card => this.getCardPickElement(card))}
                        </div>
                    </div>
                }
                <div className="row">
                    <div className="col-md-12"><h2>Picks</h2></div>
                    <div className={`col-md-12 draft-picks picks-size-${_.max(this.state.picks.map(cmcPile => cmcPile.length))}`}>
                        {_.map(this.state.picks, (cmcPile, index) => this.getCmcPileElement(cmcPile, index))}
                    </div>
                </div>
                {
                    this.state.computerPicks.map((ai, index) =>
                        <div className="row" key={index}>
                            <div className="col-md-12"><h2>AI {index}</h2></div>
                            <div className={`col-md-12 draft-picks picks-size-${_.max(ai.map(cmcPile => cmcPile.length))}`}>
                                {_.map(ai, (cmcPile, index) => this.getCmcPileElement(cmcPile, index))}
                            </div>
                        </div>
                    )
                }
            </div>
        );
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

    private makePick(card: Card): void {
        this.humanPlayer.makePick(card);
        for (const computerPlayer of this.computerPlayers) {
            computerPlayer.computerPick();
        }
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
        this.setState({
            pack: this.humanPlayer.nextPack,
            picks: this.splitIntoCmcPiles(this.humanPlayer.picks),
            computerPicks: this.computerPlayers.map(computerPlayer => this.splitIntoCmcPiles(computerPlayer.picks))
        });
    }

    private getCardPickElement(card: Card): JSX.Element {
        return <CardPick key={card.uuid} onClick={() => { this.makePick(card) } } imageUrl={card.imageUrl} />
    }

    private getCardImageElement(card: Card, index: number): JSX.Element {
        return <CardImage key={card.uuid} url={card.imageUrl} additionalClasses={`pile-index-${index}`} />
    }

    private getCmcPileElement(pile: Card[], index: number): JSX.Element {
        return (
            <div className={`cmc pile-size-${pile.length}`} key={index}>
                {_.map(pile, (card, index) => this.getCardImageElement(card, index))}
            </div>
        );
    }
}