import React from 'react';

export class ModuleCard extends React.Component {
    render() {
        return (
            <img
                className="stats-display-mini"
                src="./dice.png"
                alt="Dice"
                onClick={() => this.props.onClick()}
            />
        );
    }
}