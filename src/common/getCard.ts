import Card from "./Card";
import cardList from "./cardList";

export default function getCard(name: string): Card {
    const cards = cardList.filter(card => card.name.toLowerCase() === name.toLowerCase());
    if (cards.length > 0) {
        return cards[0];
    }
    return null;
}