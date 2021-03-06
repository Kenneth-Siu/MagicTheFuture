import * as React from "react";
import ColorPairPrimer from "./ColorPairPrimer";
import Card from "../common/Card";
import getCard from "../common/getCard";
import CardImage from "../common/components/CardImage";

const mtgM = `../dist/${require(`./resources/images/mtgM.png`) as string}`;

function card(name: string): JSX.Element {
    const card = getCard(name);
    if (card) {
        return <CardImage url={card.imageUrl} key={card.id} />;
    }
    return null;
}

function previewCards(...names: string[]): JSX.Element {
    return <div className="preview-cards">{names.map(name => card(name))}</div>;
}

export const colorPairPrimers = [
    new ColorPairPrimer(
        "blue-black",
        "Blue-Black — Furtive",
        [
            <div className="bg-info info-box"><img src={mtgM} className="mtg-m" /> The card types are:<ul>
            <li>Unit <span className="text-muted"><i>(Creature)</i></span></li>
            <li>Device <span className="text-muted"><i>(Artifact)</i></span></li>
            <li>Development <span className="text-muted"><i>(Enchantment)</i></span></li>
            <li>Strategy <span className="text-muted"><i>(Sorcery)</i></span></li>
            <li>Instant</li>
            <li>Land</li>
            <li>Organization <span className="text-muted"><i>(Planeswalker)</i></span></li>
            </ul></div>,

            <p>The Left Hand is the everpresent shadow emanating from the undercity. Very little gets done without them being involved some way or other, and as such any motion to try and clamp down on their activities somehow... peters out along the command chain.</p>,

            <blockquote><p>Furtive <i>(Whenever this unit attacks with exactly one other unit, it can’t be blocked this turn.)</i></p></blockquote>,

            <p>Blue-black comes to play with less of a control shell, and much more of a tempo strategy. The deck should (hopefully) have a lot of cheap evasive units, as well as ways to stall out the board on the ground. This usually means high-toughness blockers, removal, or tempo plays to buy you enough time to attack for lethal.</p>,

            <p>Cards like these get the job done very nicely:</p>,

            previewCards("Refractive Skysoarer", "Corporate Spy"),

            <p>Both <u>Refractive Skysoarer</u> and <u>Corporate Spy</u> look innocuous enough, but they can spell some real trouble for an opponent when they hit the table on turn two and just keep attacking. As you might be able to tell, the new mechanic <i>furtive</i> plays very well with both other units that are hard to block and also other units with <i>furtive</i>. Take note, though, that it can also work well with units that, though they might be blocked easily, don't die easily in combat.</p>,

            <p>And of course, the counterpart to dealing damage in a tempo deck is throwing a spanner into the opponent's works, with high-toughness blockers and timely tricks:</p>,

            previewCards("Migratory City", "Inside Infiltration", "Undercroft Entangler"),

            <p>Your opponents will never figure out how they somehow lost.</p>
        ]
    ),
    new ColorPairPrimer(
        "blue-red",
        "Blue-Red — Devices",
        [
            <p className="bg-info info-box"><img src={mtgM} className="mtg-m" /> Much as you spend <u>mana</u> to <u>cast spells</u>, you spend <u>resources</u> to <u>issue orders</u>.</p>,

            <p>Start your engines and assemble your contraptions, the Free Thinkers are accepting of any promising intellectuals. A loosely connected group of inventors, engineers, scientists, entrepreneurs, the Free Thinkers exist as a way to promote technological progress without interference from self-interested parties, whether they be governments or... less scrupulous organisations.</p>,

            <p>Blue-red wants you to collect as many devices as you can, and then watch it go: There's really not much more than that. Let's look at some reasons for collecting devices at common:</p>,

            previewCards("Engine Welder", "Rocket Salvo"),

            <p>As you can see, <u>Engine Welder</u> and <u>Rocket Salvo</u> are distinctly medicore without the help of devices, but when most every permanent in your deck is a device, they really power up.</p>,

            <p>Also of note is that red also enjoys <i>sacrificing</i> devices, and there are plenty of cards that care about the number of devices you have (not necessarily device cards!), so generating oodles of device tokens might help your cause too.</p>
        ]
    ),
    new ColorPairPrimer(
        "white-blue",
        "White-Blue — Displace",
        [
            <p className="bg-info info-box"><img src={mtgM} className="mtg-m" /> <u>Dematerialising</u> a permanent is the same as <u>exiling</u> it.</p>,

            <p>Order must be restored! Take command over the police and domestic military, and return peace to the cities.</p>,

            <blockquote><p>Displace target unit. <i>(Dematerialise that unit. Return it to the battlefield under its owner’s control at the beginning of the next end step.)</i></p></blockquote>,

            <p>White-blue often likes to "flicker" its permanents — i.e. to dematerialise it and then return it to the battlefield. It lets you retrigger the enter-the-battlefield effects of your units multiple times and gradually build an advantage over your opponents. This will involve building up your defenses quickly or making plays to buy you time in order to slow the game down and help you reach your late-game, where you should be able to overwhelm your opponent.</p>,

            <p>Take a gander at this pair of commons:</p>,

            previewCards("Community Officer", "Arrester Droid"),

            <p>Cards like <u>Community Officer</u> and <u>Arrester Drone</u> are the bread and butter of the white-blue flicker deck as they both develop your board and also displace something. (Remember, on your turn, displacing something is also a way to get a blocker out of the way, and on your opponent's turn, can stop an opponent's unit from attacking)</p>,

            <p>And here are some juicy targets to trigger over and over:</p>,

            previewCards("Suppression Patrol", "Reconstruction Specialist"),

            <p>Oh, what's that? That's right. <i>Value.</i></p>
        ]
    ),
    new ColorPairPrimer(
        "white-black",
        "White-Black — Lifegain/lifeloss",
        [
            <p>The ruling elite have more worries than just some petty wars on the other side of the world. The next election is coming up, and the polls aren't looking pretty. Maybe you can grease some palms to keep ahold of your position of power?</p>,

            <p>White-black is back as the lifegain archetype — gain life, get rewarded. This time around, though, your life total does a bit more heavy lifting, with a plethora ways both to gain life and to <i>spend</i> it.</p>,

            <p>Black has traditionally been good at getting efficient effects if you're willing to cough up the life points. Let's take a look at a prime example:</p>,

            previewCards("Surprise Round"),

            <p><u>Surprise Round</u> is very efficient for its cost: -2/-2 for only one psi! Given how efficient it is, it might be a high pick for other black drafters too, so you'll want to snap these up early. However, the more cards like these that you pick up, the more the lifeloss becomes a strain on your life total...</p>,

            <p>That's where white steps in and brings with it ways to buoy your life total, so you can fit in more of those efficient black cards into your deck.</p>,

            previewCards("Remote Paralyzer", "Biomech Corps"),

            <p>Although black and white may seem at odds, it's more like they're working on opposite sides of the same coin: gain life to spend life. You'll notice their yin and yang in the ways they reward you for being in this color combination too:</p>,

            previewCards("Mesosphere Dancer", "Deprivation Torture")
        ]
    ),
    new ColorPairPrimer(
        "black-red",
        "Black-Red — Plunder",
        [
            <p>There are those who seek wealth and fortune from these turbulent times. Mercenaries are always willing to give a helping hand... for the right price; and the Warapur Company always offers the best prices.</p>,

            <blockquote><p>Plunder <i>(Whenever this unit deals combat damage to a player, create a colorless Credit device token.)</i></p></blockquote>,

            <p>Black-red is a blend of aggression and sacrifice themes. There are plenty of ways in both colors to sacrifice things for fun and profit, and <i>plunder</i> lets you generate a stream of Credit tokens to sacrifice, but only if you can keep hitting the opponent with those units.</p>,

            <p>Let's take a look at a couple of units with plunder now:</p>,

            previewCards("Warapur Company Enforcer", "Hired Artillery"),

            <p>Most cards with plunder also give you a way to make use of the Credit tokens it makes. But plunder by itself doesn't make the tokens, you also need to connect with the units! This is why you need to keep the pressure on in order to keep your stream of Credits steady, with combat tricks and ways to get blockers out of the way.</p>,

            previewCards("Blitz Agent", "Hyperadrenaline"),

            <p><u>Blitz Agent</u> turns <i>displace</i> around, affecting only your opponent's units... and getting it out of the way for the turn to let your attackers hit through for damage. <u>Hyperadrenaline</u> is not only a combat trick but can also smack the opponent for really quite large chunks of damage and double your plunder triggers.</p>,

            <p>And if you ever find you have too many tokens lying around, there are ways of sacrificing them for profit too:</p>,

            previewCards("Surveillance Craft", "Slagthrower"),

            <p>Be warned, though, they might be in high demand: Blue-red might want to steal your device-sacrificing capabilities, and black-green might want to steal your black sacrifice outlets, so keep an eye during your draft so you don't end up with too many ways to make tokens and no ways to spend them, or vice-versa.</p>,

            <p>There's one final card in this archetype that's quite interesting:</p>,

            previewCards("Hijack"),

            <p><u>Hijack</u> does three things for you in a black-red deck: it takes a blocker out of the equation for a turn to let you hit through for a Credit token, it gives you a temporary attacker for even more damage, and then you can sacrifice whatever you just "borrowed" to top off the beating!</p>
        ]
    ),
    new ColorPairPrimer(
        "black-green",
        "Black-Green — Mutate",
        [
            <p className="bg-info info-box"><img src={mtgM} className="mtg-m" /> Your <u>trashpile</u> is the same zone as your <u>graveyard</u>.</p>,

            <p>Reduce, reuse, recycle. Right? Well, reuse and recycle in any case...</p>,

            <blockquote><p>Mutate <i>(When this unit falls, reveal cards from the top of your library until you reveal a unit card that costs less. Put that card onto the battlefield and the rest on the bottom of your library in a random order.)</i></p></blockquote>,

            <p>Black-green is also all about sacrificing things but not in the aggressive way black-red goes about it. Grind out games by making favourable trades, like using units with <i>mutate</i>, making tokens, and then sacrificing them for value. We know there are various ways to sacrifice things, but let's have a look at a few more:</p>,

            previewCards("Interrogation Process", "Sewer Monster"),

            <p><i>Mutate</i> is obviously going to be helpful to a game plan that involves units dying a lot, so let's take a closer look: What it does is that when the unit dies, you get a fresh new one from your library, randomly chosen from units that cost less. There are a couple of things to remember with it as well. <ul><li>The new unit comes out untapped, which can be useful if you attack first, then sacrifice the unit with mutate.</li><li>Take care during deck construction! You don't get anything if nothing is left in your library that costs less.</li></ul></p>,

            previewCards("Sewer Unit", "Sewer Slitherer", "Sink into the Oceans"),

            <p>Toss in token makers, sprinkle some units with mutate, add some rewards for sacrificing things (to taste), out of the melting pot comes straight value.</p>
        ]
    ),
    new ColorPairPrimer(
        "red-green",
        "Red-Green — Ramp",
        [
            <p>Since OPEC (the Organization of Petroleum Exporting Companies) finally felt the effects of peak oil and collapsed, the inhabitants who didn't have the resources to relocate have lived a nomadic life in the Baljurashi desert.</p>,

            <p>Contrary to the color pair's philosophy, this is probably the most delicate archetype with many moving parts, playing more like a combo deck with many interchangeable cogs than anything ordinary. Red-green has often had the strategy of using green's "ramp" spells (cards which increase the amount of psi you have available faster than the one per turn you're allowed to play via lands) in order to play units that are disproportionately large compared to what turn it is and overpower an opponent who might still be playing smaller units. Here, the core of that strategy still holds true... but with a twist.</p>,

            <p>Let's start with the ramp spells first:</p>,

            previewCards("Lifestrider", "Rampant Growth"),

            <p>Look out for the green ramp cards: they are also a useful way to "splash" — i.e. to generate colors of resource outside of the two you're probably playing. Because of this, you might not want to wait <i>too</i> long before picking them up, depending on the preferences of the drafters around you, but additionally, it might also allow <i>you</i> to splash powerful cards outside of your colors.</p>,

            <p>And what sort of ramp deck doesn't have some nice big monsters at the top of the curve?</p>,

            previewCards("Vulcan Devastators", "Screeching Terror"),

            <p>The twist in this version of red-green is in how you end games — in explosive fashion! There's a type of card that... let's not mince words, it's usually pretty awful:</p>,

            previewCards("Unstable Growth"),

            <p>The problem with it is that it's a strategy, which means the opponent knows exactly what's going on when you issue them and can block or not block accordingly, leaving you one card down in exchange for some damage on the opponent. But if you're able to really make the damage count, it starts to look a lot more appealing to play. The way to do this is by threatening to end the game right then and there with cards like <u>Screeching Terror</u> up above, and these:</p>,

            previewCards("Rip Space-Time", "Supervolcanic Fallout", "Escaped Test Subject"),

            <p>And finally, there are a few cards that you might find useful since you target your units so much:</p>,

            previewCards("Gauss Scrapgunner", "Wanderer Caravans"),

            <p>These "nomad" cards reward you whenever you target a unit you control. Target two units with the same order, and you get two triggers! Neat.</p>,
        ]
    ),
    new ColorPairPrimer(
        "red-white",
        "Red-White — Equipment",
        [
            <p>With the re-outbreak of war in Central Eurasia, restlessness had been on the rise again, which blossomed into nation-state rebellions throughout the various power blocs.</p>,

            <p>In red-white, you want to pick up equipment for your units. Although there are equipment in specifically white and red, you can also supplement them with the colorless equipment. You might end up fighting the others over them, though.</p>,

            previewCards("Personal Forcefield", "Homeostimulation Suit", "Jetpack"),

            <p>But there are other ways to generate equipment too. In fact, these will probably be some of the more important cards in your deck:</p>,

            previewCards("Cache Mapper", "Supply Runner"),

            <p>Decks that encourage you to have lots of equipment can very easily end up with not enough units to actually hold them, and cards like <u>Cache Mapper</u> and <u>Supply Runner</u> provide you with both equipment and units to hold them, reducing the strain on your deck from being pulled in two different directions.</p>,

            <p>And finally, all this equipment had better be good for something other than just random dudes to hold them. Let's take a look at a few:</p>,

            previewCards("Sand Sappers", "Charge Captain", "Selfdestruct Sequence"),

            <p>Some cards, like <u>Sand Sappers</u>, will make it very clear that they perform better with equipment: when they're equipped, they turn into a 2-cost 3/3 unit with vigilance! Sweet! Others, like <u>Charge Captain</u>, take a second glance to realise they work well with equipment: double strike doubles the effect of any equipment it's holding. And finally, those tokens you're making aren't only good for letting units hold them, you can also sacrifice them to the various red sacrifice outlets, like <u>Selfdestruct Sequence</u>.</p>
        ]
    ),
    new ColorPairPrimer(
        "green-white",
        "Green-White — Tokens",
        [
            <p>Armies work better when they're logistically organised, and green-white is no different, back again as the token-making color pair. It has the potential to be very powerful, but the baseline of just being able to play units is pretty reasonable too, even in the case of a drafting disaster.</p>,

            <p>There are plenty of token-makers to get your board state online in a hurry:</p>,

            previewCards("Raise the Alarm", "Brood Ambush", "Warzone Reinforcements"),

            <p>They're pretty reasonable on their own, but when you pair them with payoff cards, things get out of hand pretty quickly.</p>,

            previewCards("Draco Guardian", "Supply Scavengers", "Inspired Charge"),

            <p>Spot removal tends to be at a premium in limited environments, but being able to produce multiple units from one card can make this deck much more resilient and difficult to deal with than other decks.</p>
        ]
    ),
    new ColorPairPrimer(
        "green-blue",
        "Green-Blue — Flash",
        [
            <p>Umida Incorporated is the megacorp always on the cutting edge and always looking to hire bright minds.</p>,

            <p>Green-blue has always been a bit of a problem child in terms of an identity, and this time around it's doing something fairly different. It encourages you to play as many instants and units with flash as you can. In most decks, what are known as counterspells are a risk to include: leave the lands untapped, and if your opponent doesn't do anything worth countering, you wasted your turn for nothing. However, if all your other cards can also be played at the end of the opponent's turn, you can develop your board or accrue card advantage while also threatening your opponent with any of a variety of actions.</p>,

            <p>Let's take a look at a whole bunch of them. After all, the more you have, the better.</p>,

            previewCards("Atmospheric Survey Net", "Collapse Consciousness", "Manipulative Negotiation", "Riptide Illuminator", "SAM Team", "Support Team"),

            <p>Just imagine: From turn two on, you can just leave your lands untapped, and pass the turn. What does your opponent do? Play their cards and risk them being countered? Risk attacking into a unit flashed in? And if they don't do anything, you can just draw some cards. With this many ways to interact on the opponent's turn, you get a real tactical advantage.</p>
        ]
    )
]
