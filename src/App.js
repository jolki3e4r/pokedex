import React from 'react';
import './App.css';
import CaughtPokemon from "./components/CaughtPokemon"
import BestPokemon from './components/BestPokemon'
import Logo from "./components/Logo"


function App() {
  return (
    <div className="App">
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

export default App;
