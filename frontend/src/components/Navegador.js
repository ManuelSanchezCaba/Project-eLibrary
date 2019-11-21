import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navegador extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">eLibrary</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/books">eReader</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">eAdmin</Link>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0 d-flex flex-column">
                        <div className="text-white">Usuario: </div>
                        <div className="text-white">Rol: </div>
                    </div>
                </div>
            </nav>
        )
    }
}
