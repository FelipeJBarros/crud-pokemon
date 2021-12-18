import React from "react";

import "./PokemonDisplay.css"
import PokemonBotton from "./PokemonBotton";

export default function PokemonDisplay({ pokemons, minified }) {

    const pokemonButtons = pokemons.map((pokemon, idx) => {
        return <PokemonBotton key={idx} pokemonName={pokemon} minified={minified} />
    })

    return (
        <div className={minified ? "pokemons-selected-minified" : "pokemons-selected"}>
            {pokemonButtons}
        </div>

    )
}