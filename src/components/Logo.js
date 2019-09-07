import React from 'react'

const Logo = (props) => {

    return (
        <header className="App-header">
            <h1>WELCOME TO {props.appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" />
        </header>
    )
}

export default Logo