import React, { useState } from "react";
import { saveUser } from "../app/userService";

import PokemonDisplay from "../components/PokemonDisplay";
import Alert from "../components/Alert";

export default function Register(props) {

    const initialState = {
        trainer: "",
        region: "",
        selected: "",
        team: []
    }

    const [user, setUser] = useState(initialState)
    const [alertStatus, setAlertStatus] = useState({
        active: false,
        type: "",
        message: ""
    });

    function onChange(event) {
        const value = event.target.value;
        const fieldName = event.target.name;

        setUser(prevstate => ({
            ...prevstate,
            [fieldName]: value
        }))
    }

    function onSubmit(event) {
        let { trainer, region, team } = user
        console.log({ trainer, region, team })

        saveUser({
            trainer: user.trainer,
            region: user.region,
            team: user.team
        })
        cleanForm()
        setAlertStatus({
            active: true,
            type: "sucess",
            message: "Cadastro feito com sucesso!"
        })
    }

    function addPokemonOnTeam() {
        const newPokemon = user.selected
        const interimTeam = [...user.team]

        if (newPokemon !== null && newPokemon !== undefined) interimTeam.push(newPokemon);

        setUser(prevstate => ({
            ...prevstate,
            selected: "",
            team: interimTeam
        }))

    }

    function cleanForm() {
        setUser(initialState)
    }

    function closeAlert() {
        setAlertStatus(prevstate => ({
            ...prevstate,
            active: false
        }))
    }

    return (
        <div className="card">
            <div className="card-header">
                Cadastro de time pokémon
            </div>

            <Alert
                type={alertStatus.type}
                message={alertStatus.message}
                active={alertStatus.active}
                close={closeAlert}
            />

            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Nome do treinador: *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ash Katchum"
                                name="trainer"
                                value={user.trainer}
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="form-group">
                            <label>Região: *</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Kanto"
                                name="region"
                                value={user.region}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>

                <hr className="my-4"></hr>

                <div className="row">
                    <div className="col-md-6">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Escolha um pokémon (ex.: pikachu)"
                                name="selected"
                                value={user.selected}
                                onChange={onChange}
                            >
                            </input>
                            <button
                                type="button"
                                className="btn btn-primary"
                                id="add-btn"
                                onClick={addPokemonOnTeam}
                            >
                                Adicionar
                            </button>
                        </div>
                    </div>
                </div>

                <PokemonDisplay pokemons={user.team}></PokemonDisplay>

                <hr className="my-4"></hr>

                <div className="row">
                    <div className="col-md-1">
                        <button
                            type="button"
                            className="btn btn-success"
                            id="save-btn"
                            onClick={onSubmit}
                        >Salvar</button>
                    </div>
                    <div className="col-md-1">
                        <button
                            type="button"
                            className="btn btn-primary"
                            id="clean-btn"
                            onClick={cleanForm}
                        >Limpar</button>
                    </div>
                </div>
            </div>
        </div >
    )
}