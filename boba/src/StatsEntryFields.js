import React from 'react';

export class StatsEntryFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            strength: '',
            dexterity: '',
            constitution: '',
            wisdom: '',
            intelligence: '',
            charisma: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // TODO : DO NOT DIRECTLY ACCESS COOKIES IN FUTURE
    handleSubmit(event) {
        event.preventDefault();
        var cookie = {
            "abilityScores" : [
                {
                    "strength":this.state.strength,
                    "dexterity":this.state.dexterity,
                    "constitution":this.state.constitution,
                    "intelligence":this.state.intelligence,
                    "wisdom":this.state.wisdom,
                    "charisma":this.state.charisma
                }
            ]
        }
        document.cookie = "abilityScores=" + JSON.stringify(cookie);
        console.log(JSON.stringify(cookie));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} method='POST'>
                <label>
                    Strength :
                    <input type="text" pattern="[0-9]*" value={this.state.strength} onChange={event => this.setState({strength: event.target.value})} name='strength'/>
                </label>

                <label>
                    Dexterity :
                    <input type="text" pattern="[0-9]*" value={this.state.dexterity} onChange={event => this.setState({dexterity: event.target.value})} name='dexterity'/>
                </label>

                <label>
                    Constitution :
                    <input type="text" pattern="[0-9]*" value={this.state.constitution} onChange={event => this.setState({constitution: event.target.value})} name='constitution'/>
                </label>

                <label>
                    Intelligence :
                    <input type="text" pattern="[0-9]*" value={this.state.intelligence} onChange={event => this.setState({intelligence: event.target.value})} name='intelligence'/>
                </label>

                <label>
                    Wisdom :
                    <input type="text" pattern="[0-9]*" value={this.state.wisdom} onChange={event => this.setState({wisdom: event.target.value})} name='wisdom'/>
                </label>

                <label>
                    Charisma :
                    <input type="text" pattern="[0-9]*" value={this.state.charisma} onChange={event => this.setState({charisma: event.target.value})} name='charisma'/>
                </label>

                <input type='submit' value='submit'/>
            </form>
        );
    }
}