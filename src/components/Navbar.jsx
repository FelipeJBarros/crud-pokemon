import React from "react";

import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#here">CRUD-POKEMON</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Pokedex
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#here">Sobre nós</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/cadastro">Criar time</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/consulta">Consultar times</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}