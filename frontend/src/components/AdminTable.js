import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Navegador from './Navegador';
import NewBook from './NewBook';

export default class AdminTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
			editBookData: {
				idBook: '',
				contenido: '',
				autor: '',
				fecha_creacion: '',
				categoria: '',
				descripcion: '',
				cantidad_pagina: '',
				Accion: '',
			},
		};

		sessionStorage.setItem('eRead', '');
		sessionStorage.setItem('eAd', 'nav-item active');
	}

	async componentDidMount() {
		this.getBook();
	}

	getBook = async () => {
		const res = await axios.get('http://localhost:4000/api/book');
		this.setState({ book: res.data });
	};

	deleteBook = async (id) => {
		await axios.delete('http://localhost:4000/api/book/' + id);
	};

	editBook(
		idBook,
		contenido,
		autor,
		fecha_creacion,
		categoria,
		descripcion,
		cantidad_pagina
	) {}

	render() {
		if (sessionStorage.getItem('t_usuario') !== 'eAdmin') {
			sessionStorage.setItem('eAd', 'd-none');
			return <Redirect to={'/'} />;
		}

		this.getBook();

		return (
			<div>
				<Navegador />

				<div className="container p-4">
					<NewBook />
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">id</th>
								<th scope="col">contenido</th>
								<th scope="col">autor</th>
								<th scope="col">fecha de creacion</th>
								<th scope="col">categoria</th>
								<th scope="col">descripcion</th>
								<th scope="col">cantidad de pagina</th>
								<th scope="col">Accion</th>
							</tr>
						</thead>
						<tbody>
							{this.state.book.map((book) => (
								<tr key={book.idBook}>
									<th scope="row">{book.idBook}</th>
									<td>{book.contenido}</td>
									<td>{book.autor}</td>
									<td>{book.fecha_creacion.slice(0, 10).replace('T', ' ')}</td>
									<td>{book.categoria}</td>
									<td>{book.descripcion}</td>
									<td>{book.cantidad_pagina}</td>
									<td>
										<button type="button" className="btn btn-primary mr-1">
											<i className="far fa-eye"></i>
										</button>
										<button
											type="button"
											className="btn btn-success mr-1"
											onClick={this.editBook.bind(
												this,
												book.idBook,
												book.contenido,
												book.autor,
												book.fecha_creacion,
												book.categoria,
												book.descripcion,
												book.cantidad_pagina
											)}
										>
											<i className="fas fa-edit"></i>
										</button>
										<button
											type="button"
											className="btn btn-danger"
											onClick={() => this.deleteBook(book.idBook)}
										>
											<i className="far fa-trash-alt"></i>
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
