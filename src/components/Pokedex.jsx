import React from "react";

import "./Pokedex.css"

import usePokemon from "../Hooks/usePokemon";
import PokemonBotton from "./PokemonBotton";

export default function Pokedex(props) {
    const { data, error, isLoading } = usePokemon()

    if (error) return <span>Algo errado aconteceu...</span>
    if (isLoading) return <span>Carregando...</span>

    const { results } = data;

    const pokedex = Object.keys(results).map(key => <PokemonBotton key={results[key].name} pokemonName={results[key].name} />)

    return (
        <div className="pokedex">{pokedex}</div>
    )
}