import React, { Component } from 'react';
import './App.css';
import CaughtPokemon from "./components/CaughtPokemon"
import BestPokemon from './components/BestPokemon'
import Logo from "./components/Logo"
import Clock from "./components/Clock"

//const pokemonNames = ['Squirtle', 'Bulbasaur', 'Charmander', 'Blastoise', 'Metapod', 'Beedrill', 'Pidgeotto', 'Spearow', 'Ekans', 'Pikachu', 'Sandshrew', 'Sandslash', 'Ninetales', 'Jigglypuff', 'Meowth', 'Psyduck'];

const date = new Date().toLocaleDateString()

class App extends Component {

  logWhenClicked = () => {
    console.log("it doesn't matter what the message is")
  };

  render() {
    return (
      <div className="App">
        <Logo appName="POKEDEX" handleClick={this.logWhenClicked} />
        <BestPokemon />
        <CaughtPokemon fecha={date} />
        <Clock />
      </div>
    );
  }
}

export default App;
