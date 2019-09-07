import React from 'react';
import './App.css';
import CaughtPokemon from "./components/CaughtPokemon"
import BestPokemon from './components/BestPokemon'
import Logo from "./components/Logo"

const pokemonNames = ['Squirtle', 'Bulbasaur', 'Charmander', 'Blastoise', 'Metapod', 'Beedrill', 'Pidgeotto', 'Spearow', 'Ekans', 'Pikachu', 'Sandshrew', 'Sandslash', 'Ninetales', 'Jigglypuff', 'Meowth', 'Psyduck'];

const date = new Date().toLocaleDateString()

function App() {
  return (
    <div className="App">
      <Logo appName="POKEDEX" />
      <BestPokemon nombre={pokemonNames} />
      <CaughtPokemon fecha={date} />
    </div>
  );
}

export default App;
