import React from 'react'

const BestPokemon = () => {
    const pokemonNames = ['Squirtle', 'Bulbasaur', 'Charmander', 'Blastoise', 'Metapod', 'Beedrill', 'Pidgeotto', 'Spearow', 'Ekans', 'Pikachu', 'Sandshrew', 'Sandslash', 'Ninetales', 'Jigglypuff', 'Meowth', 'Psyduck'];
    return (
        <ul className="listname">
            {pokemonNames.map((name, index) => {
                return <li key={index}>{name}</li>;
            })}
        </ul>
    );
}

export default BestPokemon;