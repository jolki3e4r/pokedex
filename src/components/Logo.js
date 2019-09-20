import React, { Component } from 'react'

class Logo extends Component {


    render() {
        return (
            <header className="App-header">
                <h1>WELCOME TO {this.props.appName}</h1>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" onClick={this.props.handleClick} alt="u pokemon" />
            </header>
        );
    }
}

export default Logo