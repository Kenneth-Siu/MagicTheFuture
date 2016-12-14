import Card from "../common/Card";

export default class CardRating {
    card: Card;
    rating: number;

    constructor(card: Card, rating: number) {
        this.card = card;
        this.rating = rating;
    }
}