import React, { Component } from 'react'

class BestPokemon extends Component {

    state = {
        pokemonNames: [],
        isLoading: true
    }

    componentDidMount = () => {
        fetch(`https://pokeapi.co/api/v2/pokedex/1/`)
            .then((res) => {
                if (res.status >= 200 && res.status < 300) {
                    return res;
                } else {
                    throw new Error('HTTP error');
                }
            })
            .then(res => res.json())

            .then(data => {
                this.setState({

                    pokemonNames:
                        [data.pokemon_entries[0].pokemon_species.name, data.pokemon_entries[3].pokemon_species.name,
                        data.pokemon_entries[4].pokemon_species.name,
                        data.pokemon_entries[5].pokemon_species.name,
                        data.pokemon_entries[6].pokemon_species.name,
                        data.pokemon_entries[7].pokemon_species.name,
                        data.pokemon_entries[8].pokemon_species.name, data.pokemon_entries[9].pokemon_species.name],
                    isLoading: false,
                })

            })
            .catch((err) => {
                this.setState({
                    isLoading: false,
                    err: err
                });
            });
    }

    render() {

        if (this.state.isLoading) {
            return <span>Loading... </span>;
        } else if (this.state.err) {
            return <span>sometime when worng </span>
        } else {
            return (

                <ul className="listname">
                    {this.state.pokemonNames.map((name, index) => {
                        return <li key={index}>{name}</li>;
                    })}
                </ul>
            );
        }
    }
}

export default BestPokemon;