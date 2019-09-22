import React, { Component, Fragment } from 'react'


class CaughtPokemon extends Component {

    state = {

        pokemonNameInput: '',
        caughtPokemon: []

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

        const newCaughtPokemon = [...this.state.caughtPokemon]
        const pokemonNameInput = this.state.pokemonNameInput
        console.log(newCaughtPokemon)
        newCaughtPokemon.push(pokemonNameInput)
        this.setState({
            caughtPokemon: newCaughtPokemon,
            pokemonNameInput: ""
        });


        console.log(newCaughtPokemon)

    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            pokemonNameInput: event.target.value

        });
    }



    render() {
        return (
            <Fragment>
                Count: {this.state.caughtPokemon.length}
                <button onClick={this.catchPokemon} >Catch Pokemon</button>
                <input type="text" value={this.state.pokemonNameInput} onChange={this.handleInputChange} />
                <ul>{this.state.caughtPokemon.map(pokemon => <li>{pokemon}</li>)}</ul>
            </Fragment>
        );
    }
}

export default CaughtPokemon;
