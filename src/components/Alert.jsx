import React from "react";

export default function Alert({ type, message, active, close }) {
    let alert = null;

    switch (type) {
        case 'sucess':
            alert = (
                <div className="alert alert-dismissible alert-success">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        onClick={close}></button>
                    <strong>Parabéns!</strong> {message}.
                </div>
            )
            break;

        case 'fail':
            alert = (
                <div className="alert alert-dismissible alert-danger">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="alert"
                        onClick={close}></button>
                    <strong>Ops!</strong> {message}.
                </div>
            )
            break;
        default:
            alert = null;
            break;
    }

    return (
        active ? alert : null
    )
}