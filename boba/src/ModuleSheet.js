import React from 'react';
import { ModuleCard } from './ModuleCard.js';
import { StatsSheet } from './StatsSheet.js';

export class ModuleSheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shStats: true
        };
        this.hideComponent = this.hideComponent.bind(this);
    }

    hideComponent(varName) {
        switch (varName) {
            case "shStats":
                this.setState({ shStats: !this.state.shStats });
                break;
            default: return;
        }
    }

    renderStatsMini() {
        return (
            <ModuleCard
                onClick={() => this.hideComponent("shStats")}
            />
        );
    }

    render() {
        const {shStats} = this.state;
        return (
            <div className="main-screen">
                <div className="module-screen">
                    {shStats && this.renderStatsMini()}
                    {!shStats && <StatsSheet/>}
                </div>
            </div>
        );
    }
}