import React from 'react'

const BestPokemon = (props) => {

    return (
        <ul className="listname">
            {props.nombre.map((name, index) => {
                return <li key={index}>{name}</li>;
            })}
        </ul>
    );
}

export default BestPokemon;