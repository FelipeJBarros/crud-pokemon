import React from "react";
import { Link } from "react-router-dom";

import Pokedex from "../components/Pokedex";

export default function home(props) {

    return (
        <div className="jumbotron">
            <h1 className="display-3">CRUD Pokedex!</h1>
            <p className="lead">Busque por Pokémon e monte o seu time.</p>
            <hr className="my-4"></hr>
            <p className="lead">
                <Link className="btn btn-primary btn-lg" to="/cadastro" role="button">Monte seu time agora</Link>
            </p>

            <Pokedex></Pokedex>
        </div>
    )
}