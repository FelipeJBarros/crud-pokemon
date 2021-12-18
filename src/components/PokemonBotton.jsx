import React from "react";

import "./PokemonBotton.css"

import usePokemon from "../Hooks/usePokemon";

export default function PokemonBotton({ pokemonName, minified }) {

    const { data, error, isLoading } = usePokemon(pokemonName.toLowerCase())

    if (error) return <span>Algo errado aconteceu...</span>
    if (isLoading) return <span>Carregando...</span>

    const { sprite } = data;

    const display = minified ? (
        <div className="botton-minified">
            <img src={sprite} alt="Foto do Pokemon" />
        </div>
    ) : (
        <div className="botton">
            <img src={sprite} alt="Foto do Pokemon" />
            <strong>{pokemonName}</strong>
        </div>
    )
    return (
        display
    )
}