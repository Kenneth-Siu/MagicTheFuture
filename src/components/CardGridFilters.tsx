import * as React from "react";
import {ColorFilter, CardFilterColor} from "../ColorFilter";
import CardGridFilterButton from "./CardGridFilterButton";

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
            <div className="spoiler-grid-filters">
                <CardGridFilterButton name="White" onClick={() => this.handleClick("white")} />
                <CardGridFilterButton name="Blue" onClick={() => this.handleClick("blue")} />
                <CardGridFilterButton name="Black" onClick={() => this.handleClick("black")} />
                <CardGridFilterButton name="Red" onClick={() => this.handleClick("red")} />
                <CardGridFilterButton name="Green" onClick={() => this.handleClick("green")} />
                <CardGridFilterButton name="Multicolor" onClick={() => this.handleClick("multicolor")} />
                <CardGridFilterButton name="Colorless" onClick={() => this.handleClick("colorless")} />
            </div>
        );
    }
}