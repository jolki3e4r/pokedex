import React from 'react'

const Logo = () => {
    const appName = "POKEDEX"
    return (
        <header className="App-header">
            <h1>WELCOME TO {appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
        </header>
    )
}

export default Logo