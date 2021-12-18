import axios from "axios";
import pokemonHandler from "../scripts/pokemonHandler";
import { useEffect, useState } from "react";

const API_URL = "https://pokeapi.co/api/v2/pokemon";
const PAGE_LIMIT = 150;

const usePokemon = name => {
    const [response, setResponse] = useState({
        data: null,
        error: null,
        isLoading: true
    })

    const uri = name ? `${API_URL}/${name}` : `${API_URL}?limit=${PAGE_LIMIT}`;

    useEffect(() => {
        axios(uri).then(data => {
            setResponse({
                data: name ? pokemonHandler(data.data) : data.data,
                error: null,
                isLoading: false,
            })
        }).catch(error => {
            setResponse({
                data: null,
                error: error,
                isLoading: false
            })
        })
    }, [name, uri])

    return response;
}

export default usePokemon