import * as React from "react";
import ColorPairPrimer from "./ColorPairPrimer";
import Card from "../common/Card";
import cardList from "../common/cardList";

function card(name: string): Card {
    const cards = cardList.filter(card => card.name.toLowerCase() === name.toLowerCase());
    if (cards.length > 0) {
        return cards[0];
    }
    return null;
}

export const colorPairPrimers = [
    new ColorPairPrimer(
        "White-Blue — Displace",
        [
            <p>Why only make use of your unit triggers once when they enter?</p>,
            <p>Take advantage of the new mechanic <i>displace</i> to trigger your units' enter-the-warzone abilities over and over</p>
        ],
        [card("Wings of the Law"), card("Keep the Peace"), card("Reconstruction Specialist"), card("Time Loop")]
    ),
    new ColorPairPrimer(
        "White-Black — Command",
        [
            <p>Your command is a resource – take full advantage of it</p>,
            <p><i>Innervate</i> is the new name for lifelink – damage that units with innervate deal also cause you to gain that much command</p>,
            <p>Black cards power up when you spend command on them...</p>,
            <p>...and white cards help you recover command so you can spend it again</p>
        ],
        [card("Publicity Officer"), card("Remote Paralyzer"), card("Grasp of the Left Hand"), card("Mortality")]
    ),
    new ColorPairPrimer(
        "Blue-Black — Furtive",
        [
            <p>Nickel and dime your way to victory with the new mechanic <i>furtive</i></p>,
            <p>Hold up a wall of high-toughness blockers while you chip in every turn with evasive threats...</p>,
            <p>...or out-tempo your opponents with efficient disruption, bounce, and removal spells</p>
        ],
        [card("Twilight Strider"), card("collapse consciousness"), card("corporate spy"), card("Warship Phantom")]
    ),
    new ColorPairPrimer(
        "Blue-Red — Devices",
        [
            <p>Start your engines and assemble your contraptions, in this archetype, you'll want to collect as many devices as you can</p>
        ],
        [card("Scrap ferries"), card("engine welder"), card("Slipstream hunters"), card("execute takeover protocol")]
    ),
    new ColorPairPrimer(
        "Black-Red — Plunder",
        [
            <p>Generate a stream of device tokens with the new mechanic <i>plunder</i></p>,
            <p>Play aggressively to keep your units hitting the opponent to keep up your supply of Credit tokens</p>,
            <p>Reap the benefits by sacrificing the Credit tokens for beneficial effects</p>
        ],
        [card("Warapur Protection Service"), card("Frontline Eviscerator"), card("Blitz Agent"), card("Warapur Company Flagship")]
    ),
    new ColorPairPrimer(
        "Black-Green — Mutate",
        [
            <p>Recycle your units with the new mechanic <i>mutate</i></p>,
            <p>When a unit with <i>mutate</i> falls, you get to replace it with a random unit from your library</p>,
            <p>Sacrifice units for benefit multiple times using this powerful ability</p>
        ],
        [card("Sewer dredgers"), card("Urban revenant"), card("Kushak brood warden"), card("incubation hulk")]
    ),
    new ColorPairPrimer(
        "Red-Green — Monsters",
        [
            <p>No frills, no tricks, nothing fancy: play this archetype if you just want your opponent to go from 20 to 0 command</p>,
            <p>Control huge monsters and bash your opponent's face in by issuing edicts that make them pack even more punch</p>
        ],
        [card("canyon skitterer"), card("induce psychopathy"), card("wanderer caravans"), card("neural suppressor")]
    ),
    new ColorPairPrimer(
        "Red-White — Equipment",
        [
            <p>Rebellions don't happen overnight – equip your army and you'll reap the benefits</p>,
            <p>Don't overlook the ways to generate token equipment: they can help you get a critical mass of equipment to turn on powerful effects</p>
        ],
        [card("baljurashi irregulars"), card("psionics augmentation"), card("cache mapper"), card("undercover agent")]
    ),
    new ColorPairPrimer(
        "Green-White — Tokens",
        [
            <p>Overwhelm your opponent with sheer numbers! This archetype attempts to take advantage of <i>coordinate</i></p>,
            <p><i>Coordinate</i> provides you with benefits – so long as you have five units</p>,
            <p>Generate tokens as quickly as possible to reach five, and your previously tame cards will suddenly be knocking on the opponent's front door</p>
        ],
        [card("rooftop misdirector"), card("supply scavengers"), card("raise the alarm"), card("quartec class carrier")]
    ),
    new ColorPairPrimer(
        "Green-Blue — Tactics",
        [
            <p>Tactical cards let you issue them at any time – you can also watch for the little lightning bolt in the top-left of the card</p>,
            <p>Being able to do things at the last possible moment opens up all sorts of, <i>–ahem–</i> tactical avenues</p>,
            <p>The more tactical cards you draft, the more you can wrack your opponents with indecision and misinformation</p>
        ],
        [card("troposphere drifter"), card("frontier anatomist"), card("riptide illuminator"), card("cloud darter")]
    )
]
