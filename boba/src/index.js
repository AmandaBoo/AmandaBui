import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StatsSheet from "./statsModule"

class ModuleSheet extends React.Component {
  constructor() {
    super();
    this.state = {
      shStats: true
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(varname) {
    console.log(varname);

    switch (varname) {
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

class ModuleCard extends React.Component {
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

ReactDOM.render(
  <ModuleSheet />,
  document.getElementById('root')
);
