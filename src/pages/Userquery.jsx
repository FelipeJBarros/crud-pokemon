import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import PokemonDisplay from "../components/PokemonDisplay";
import { getUsers } from "../app/userService";

import "./Userquery.css"

export default function Userquery() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        setUsers(getUsers())
    }, [])

    function showTablesData() {
        return users.map((user, idx) => {
            return (
                <tr key={idx} className="center">
                    <th scope="row">{user.trainer}</th>
                    <td>{user.region}</td>
                    <td>{<PokemonDisplay pokemons={user.team} minified={true} />}</td>
                    <td></td>
                </tr>
            )
        })
    }

    return (
        <div className="card">
            <div className="card-header">
                Times cadastrados
            </div>

            <div className="card-body">
                <table className="table table-hover">
                    <thead>
                        <tr className="center">
                            <th scope="col">Treinador</th>
                            <th scope="col">Região</th>
                            <th scope="col">Time</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {showTablesData()}
                    </tbody>
                </table>
            </div>
        </div >
    )
}