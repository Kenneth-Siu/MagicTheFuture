import * as React from "react";

interface CardGridFilterButtonState {
    active: boolean;
}

export interface CardGridFitlerButtonProps { name: string, onClick: () => void }

export default class CardGridFilterButton extends React.Component<CardGridFitlerButtonProps, {}> {

    parentOnClick: () => void;
    state: CardGridFilterButtonState;

    constructor(props: CardGridFitlerButtonProps) {
        super(props);
        this.parentOnClick = props.onClick;
        this.state = {
            active: false
        };
    }

    handleClick() {
        this.setState({active: !this.state.active});
        this.parentOnClick();
    }

    render() {
        return <a className={"btn btn-default" + (this.state.active ? " active" : "")} onClick={() => this.handleClick()}>{this.props.name}</a>;
    }
}