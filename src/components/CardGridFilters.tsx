import * as React from "react";
import {ColorFilter, CardFilterColor} from "../ColorFilter";

export interface CardGridFiltersProps { onFilterChange: (colorFilter: ColorFilter) => void }

export default class CardGridFilters extends React.Component<CardGridFiltersProps, {}> {

    onFilterChange: (colorFilter: ColorFilter) => void;
    colorFilter: ColorFilter;

    constructor(props: CardGridFiltersProps) {
        super(props);
        this.onFilterChange = props.onFilterChange;
        this.colorFilter = new ColorFilter();
    }

    handleClick(color: CardFilterColor) {
        this.colorFilter[color] = !this.colorFilter[color];
        this.onFilterChange(this.colorFilter);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleClick("white")}>White</button>
                <button onClick={() => this.handleClick("blue")}>Blue</button>
                <button onClick={() => this.handleClick("black")}>Black</button>
                <button onClick={() => this.handleClick("red")}>Red</button>
                <button onClick={() => this.handleClick("green")}>Green</button>
                <button onClick={() => this.handleClick("multicolor")}>Multicolor</button>
                <button onClick={() => this.handleClick("colorless")}>Colorless</button>
            </div>
        );
    }
}