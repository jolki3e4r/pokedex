import React, { Component, Fragment } from 'react'


class CaughtPokemon extends Component {

    state = {
        count: 0,
        pokemonNameInput: ''

    }

    componentDidMount = () => {
        console.log("componentDitmount")
    }

    componentDidUpdate = () => {
        console.log("componetDidUpdate")
    }

    componentWillUnmount = () => {
        console.log("componentWillUnmount")
    }

    catchPokemon = () => {
        this.setState(previousState => {
            return {
                count: previousState.count + 1
            };
        });
    };

    handleInputChange = () => {

    }

    render() {
        return (
            <Fragment>
                Count: {this.state.count}
                <button onClick={this.catchPokemon} >Catch Pokemon</button>
                <input type="text" value={this.pokemonNameInput} />
            </Fragment>
        );
    }
}

export default CaughtPokemon;
