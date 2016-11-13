import * as React from "react";
import Card from "./Card";

export interface CardGridProps {}

export default class CardGrid extends React.Component<CardGridProps, {}> {
    render() {
        return (
            <div>
                <Card name="Combat Drones" imageUrl="./src/resources/images/Combat Drones.jpg" />
                <Card name="Hoverbike" imageUrl="./src/resources/images/Hoverbike.jpg" />
            </div>
        );
    }
}