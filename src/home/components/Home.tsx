import * as React from "react";
import NavBar from "../../common/components/NavBar";
import { siteMapDictionary } from "../../common/siteMap";
import Card from "../../common/Card";
import HighlightBox from "./HighlightBox";
import LinkBanner from "./LinkBanner";
import getCard from "../../common/getCard";

export interface HomeProps { }

interface HomeState {
    showFurtiveNotes: boolean;
    showDisplaceNotes: boolean;
    showPlunderNotes: boolean;
    showMutateNotes: boolean;
}

export default class Home extends React.Component<HomeProps, {}> {

    state: HomeState;
    cards: Card[];
    primerBannerImageUrl: string;
    draftSimBannerImageUrl: string;
    visualSpoilerBannerImageUrl: string;
    powerRankingsBannerImageUrl: string;

    constructor() {
        super();
        this.state = {
            showFurtiveNotes: false,
            showDisplaceNotes: false,
            showPlunderNotes: false,
            showMutateNotes: false
        };
        this.cards = [
            getCard("The Hemera"),
            getCard("Titan of Shisuku Sewers"),
            getCard("Radiation Strike"),
            getCard("Umida Incorporated")
        ];

        this.primerBannerImageUrl = `../dist/${require(`../resources/images/adam_burn.jpg`) as string}`;
        this.draftSimBannerImageUrl = `../dist/${require(`../resources/images/dave_melvin.jpg`) as string}`;
        this.visualSpoilerBannerImageUrl = `../dist/${require(`../resources/images/robert_kim.jpg`) as string}`;
        this.powerRankingsBannerImageUrl = `../dist/${require(`../resources/images/sandeep_karunakaran.jpg`) as string}`;
    }

    render() {
        return (
            <div>
                <NavBar activePage={siteMapDictionary.home.uuid} />
                <div className="page-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>Magic: the Convergence</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <p><i>Humanity's back at it again. You'd think it would have grown out of it by now, but no, it's gone ahead and started another world war, and it's not as if it didn't already have enough problems to deal with. Well, more work for you, then, commander.</i></p>
                            <p className="bg-info info-box">Magic: the Convergence is an entire custom set, designed specifically to be drafted.</p>
                            <p>Magic: the Convergence is inspired by the April Fools article on the Magic: the Gathering website, <a target="_blank" href="http://magic.wizards.com/en/articles/archive/feature/space-academy-lesson-one-2007-02-26">Space: the Convergence</a>. In fact, it has already inspired a collectively-made vintage cube, where famous and powerful cards from all of Magic were converted to a sci-fi theme and put into the new frames.</p>
                            <p>However, this isn't just a plain old cube that's gone through a retheming. Magic: the Convergence is an entire custom set, with all new cards (and a few choice reprints), designed with only draft in mind, and as such, I would suggest the best place to start would be the <a href="./primer.html">draft primer</a>. It goes through the mechanics of the set, small chunks at a time, and delves into the different color pairs and how you might maximise your deck in each.</p>
                            <p>There's also a <a href="./draftSim.html">draft simulator</a> that you might enjoy. It's still a bit work-in-progress — the AI could always improve — but it's pretty much there and should give you a good feel for the draft format.</p>
                            <p>Though it might be a bit overwhelming if you immediately jump to it, the <a href="./visualSpoiler.html">visual spoiler</a> contains all the cards in the set, and is filterable by color and rarity(WIP), for those who are interested.</p>
                            <p>And for those curious, the <a href="./powerRankings.html">power rankings</a> contains how the AI will rate each card's power level (numbers chosen only slightly arbitrarily by me). Go have a look and shout at me if you disagree! It's difficult to truly get a feel for the power level of the cards without playtesting, so expect this page to change a lot!</p>
                            <LinkBanner imageUrl={this.primerBannerImageUrl} linkText="Draft Primer" linkUrl="./primer.html" />
                            <LinkBanner imageUrl={this.draftSimBannerImageUrl} linkText="Draft Simulator" linkUrl="./draftSim.html" />
                            <LinkBanner imageUrl={this.visualSpoilerBannerImageUrl} linkText="Visual Spoiler" linkUrl="./visualSpoiler.html" />
                            <LinkBanner imageUrl={this.powerRankingsBannerImageUrl} linkText="Power Rankings" linkUrl="./powerRankings.html" />

                            <div style={{ display: "none" }}>
                                <h2>Designer's Notes</h2>

                                <p>Speaking of mechanics, let's look at the themes and new mechanics of the set:</p>
                                <p>To start with, Magic: the Convergence is heavily <i>device</i> themed. Just under half the units in the set are also devices, and as such, cards which can destroy them are much more powerful (and also appropriately more expensive to play).</p>

                                <h3>Furtive</h3>
                                <blockquote><p>Furtive <i>(Whenever this unit attacks with exactly one other unit, it can’t be intercepted this turn.)</i></p></blockquote>
                                <p><i>Furtive</i> was my take on the missing blue-black mechanic. If you played during the M:tG set <i>Shadows over Innistrad</i>, you'll remember the mechanic <i>skulk</i>, which was their attempt at the same thing, which in the end didn't play well enough to warrant keeping. I think furtive will probably go the same way, but it is interesting enough for it to be explored in one set. <a onClick={(e) => { this.toggleShowFurtiveNotes(); e.preventDefault(); } } href="#"><i>Designer's notes...</i></a></p>
                                {this.state.showFurtiveNotes && (
                                    <div className="designers-notes text-muted">
                                        <p>It actually stayed the same pretty much the entire way through the set's design. One of the first design goals was a way to make blue-black not the control color but a tempo-oriented beatdown color, and out popped <i>furtive</i>. It originally was a static ability which read:</p>
                                        <blockquote><p>Furtive <i>(It can’t be intercepted as long as it’s attacking with exactly one other unit.)</i></p></blockquote>
                                        <p>This means that if the opponent kills one of your attacking units before going to declare interceptors, it could still be intercepted this turn. It was intended to give the opponent some counterplay and give the mechanic some risk, but in the end, the fact that you had to attack with two units gave enough counterplay that the possibility of unintuitiveness wasn't worth it.</p>
                                    </div>
                                )}

                                <h3>Displace</h3>
                                <blockquote><p>Displace target unit. <i>(Dematerialise that unit. Return it to the battlefield under its owner’s control at the beginning of the next end step.)</i></p></blockquote>
                                <p><i>Displace</i> is something that already exists in Magic: the Gathering and appears every so often: for example, on <a target="_blank" href="http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=389521">Flickerwisp</a> and <a target="_blank" href="http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=158752">Turn to Mist</a>. Magic: the Convergence takes it and shortens it into its own action word. <a onClick={(e) => { this.toggleShowDisplaceNotes(); e.preventDefault(); } } href="#"><i>Designer's notes...</i></a></p>

                                {this.state.showDisplaceNotes && (
                                    <div className="designers-notes text-muted">
                                        <p>It was originally designed as a top-down mechanic to evoke suspended animation, and had a <i>lot</i> more rules baggage, due to both the top-down nature and the fact that both auras/modifications and +1/+1 counters were themes in the set. It was reminiscent of (a more nicely worded) <a target="_blank" href="http://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=159135">Oubliette</a> and originally read:</p>
                                        <blockquote><p>Displace target unit. <i>(Dematerialise that unit and all permanents attached to it until end of turn. Modifications and counters remain attached to and on the unit as it is dematerialised and returned. It returns under its owner's control.)</i></p></blockquote>
                                        <p>When both the aura/modification and +1/+1 counter themes were removed from the file, <i>displace</i> got shortened to the form it is today, though it still remains powerful against tokens.</p>
                                    </div>
                                )}

                                <h3>Plunder</h3>
                                <blockquote><p>Plunder <i>(Whenever this unit deals combat damage to a player, create a colorless Credit device token.)</i></p></blockquote>
                                <p>It gives black-red its home as both an aggressive deck and a "sacrifice for fun and profit" deck. It fuels red's "sacrifice devices" theme, black's "sacrifice nonland permanents" theme, and blue-red's "devices matter" theme, and is generally a pretty flexible enabler. <a onClick={(e) => { this.toggleShowPlunderNotes(); e.preventDefault(); } } href="#"><i>Designer's notes...</i></a></p>

                                {this.state.showPlunderNotes && (
                                    <div className="designers-notes text-muted">
                                        <p><i>Plunder</i> was put into the set at the same time all the color-pairs were rejigged, where the auras/modifications and +1/+1 counters archetypes were removed, and thus turned up quite late in the process, shortly after <i>Kaladesh's energy</i> mechanic was spoiled. It was seeing that some sort of parasitic mechanic could be done in a way that would not be worthless or nonsensical without context that inspired this. In essence, it's a pretty simple mechanic that exists only as an enabler, but is one with much more historical support than <i>energy</i>, since artifacts/devices have always been a staple. It hasn't really changed since it was put into the file.</p>
                                    </div>
                                )}

                                <h3>Mutate</h3>
                                <blockquote><p>Mutate <i>(When this unit falls, reveal cards from the top of your library until you reveal a unit card that costs less. Put that card onto the battlefield and the rest on the bottom of your library in a random order.)</i></p></blockquote>
                                <p>A top-down mechanic designed to evoke the sense of uncertainty that mutations in sci-fi works tend to exhibit. What will the unit turn into? <a onClick={(e) => { this.toggleShowMutateNotes(); e.preventDefault(); } } href="#"><i>Designer's notes...</i></a></p>

                                {this.state.showMutateNotes && (
                                    <div className="designers-notes text-muted">
                                        <p><i>Mutate</i> started life very different to what it is now:</p>
                                        <blockquote><p>Mutate 1CC <i>(1CC, Sacrifice this unit: Search your library for a unit card with a lesser converted psi cost and put it onto the battlefield. Then shuffle your library.)</i></p></blockquote>
                                        <p><i>"C" stands for a mana of a particular color, whatever happens to make sense on the card.</i></p>
                                        <p>It was one of my pet mechanics, and took until it was playtested before it was pretty much immediately ripped out, and prompted the great restructuring of all the color-pairs. It originally had clever interactions where some units were undercosted with additional costs so you could search them up with normally-costed mutate units, and some units with mutate that had a very high cost, but with a way to reduce its cost.</p>
                                        <p>After playtesting, the mechanic revealed what it truly was: very fun while drafting to build up sweet interactions; very dull while playing, as games always ended up with the same units hitting the battlefield. It should have been pretty easy to catch since tutoring effects (ways to search your library for specific cards) are always a danger of causing repetitive play, but being a pet mechanic, it blinded me to the dangers.</p>
                                        <p>The legacies of the old mechanic are still littered about, as the new mutate mechanic still plays at least a little nicely with the old one, such as <a target="_blank" href={getCard("Kushak Exile").imageUrl}>Kushak Exile</a>, <a target="_blank" href={getCard("Sewer Monster").imageUrl}>Sewer Monster</a>, <a target="_blank" href={getCard("Genetic Contortion").imageUrl}>Genetic Contortion</a>, and <a target="_blank" href={getCard("W.A.S.P. Advance Prototype").imageUrl}>W.A.S.P. Advance Prototype</a></p>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="col-md-4">
                            <HighlightBox cards={this.cards} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private toggleShowFurtiveNotes() {
        this.setState({ showFurtiveNotes: !this.state.showFurtiveNotes });
    }
    private toggleShowDisplaceNotes() {
        this.setState({ showDisplaceNotes: !this.state.showDisplaceNotes });
    }
    private toggleShowPlunderNotes() {
        this.setState({ showPlunderNotes: !this.state.showPlunderNotes });
    }
    private toggleShowMutateNotes() {
        this.setState({ showMutateNotes: !this.state.showMutateNotes });
    }
}
