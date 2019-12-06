import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
	Input,
	FormGroup,
	Label,
	Modal,
	ModalHeader,
	ModalBody,
	ModalFooter,
	Button,
} from 'reactstrap';

import Navegador from './Navegador';
import NewBook from './NewBook';

export default class AdminTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
			editBookData: {
				idBook: '',
				titulo: '',
				contenido: '',
				autor: '',
				fecha_creacion: '',
				categoria: '',
				descripcion: '',
				cantidad_pagina: '',
			},
			redirect: false,
			editBookModal: false,
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
		titulo,
		contenido,
		autor,
		fecha_creacion,
		categoria,
		descripcion,
		cantidad_pagina
	) {
		this.setState({
			editBookData: {
				idBook,
				titulo,
				contenido,
				autor,
				fecha_creacion,
				categoria,
				descripcion,
				cantidad_pagina,
			},
			editBookModal: !this.state.editBookModal,
		});
	}

	updateBook = async (e) => {
		let {
			idBook,
			titulo,
			contenido,
			autor,
			fecha_creacion,
			categoria,
			descripcion,
			cantidad_pagina,
		} = this.state.editBookData;
		fecha_creacion = fecha_creacion.slice(0, 10).replace('T', ' ');
		await axios
			.put('http://localhost:4000/api/book/' + this.state.editBookData.idBook, {
				idBook,
				titulo,
				contenido,
				autor,
				fecha_creacion,
				categoria,
				descripcion,
				cantidad_pagina,
			})
			.then((response) => {
				console.log(response.data);
				this.setState({
					editBookModal: false,
					editBookData: {
						titulo: '',
						contenido: '',
						autor: '',
						fecha_creacion: '',
						categoria: '',
						descripcion: '',
						cantidad_pagina: '',
					},
				});
			});
	};

	signup = (e) => {
		e.preventDefault();
		sessionStorage.setItem('cancel_redirec', '/admin');
		this.setState({ redirect: true });
	};

	toggleEditBookModal = () => {
		this.setState({ editBookModal: !this.state.editBookModal });
	};

	render() {
		if (sessionStorage.getItem('t_usuario') !== 'eAdmin') {
			sessionStorage.setItem('eAd', 'd-none');
			return <Redirect to={'/'} />;
		}

		if (this.state.redirect) {
			return <Redirect to={'/signup'} />;
		}

		this.getBook();

		return (
			<div>
				<Navegador />

				<div className="container p-4">
					<div className="d-flex flex-row bd-highlight mb-3">
						<NewBook />
						<Button
							className="my-2 ml-2"
							color="secondary"
							onClick={this.signup}
						>
							Add User
						</Button>
						<Modal
							isOpen={this.state.editBookModal}
							toggle={this.toggleEditBookModal}
						>
							<ModalHeader toggle={this.toggleEditBookModal}>
								Edit a new Book
							</ModalHeader>
							<ModalBody>
								<FormGroup>
									<Label for="titulo">Titulo</Label>
									<Input
										id="titulo"
										value={this.state.editBookData.titulo}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.titulo = e.target.value;
											this.setState({ editBookData });
										}}
									/>
								</FormGroup>

								<FormGroup>
									<Label for="contenido">Contenido</Label>
									<Input
										id="contenido"
										value={this.state.editBookData.contenido}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.contenido = e.target.value;
											this.setState({ editBookData });
										}}
									/>
									<Input type="file" name="file" onChange={this.fileBook} />
								</FormGroup>
								<FormGroup>
									<Label for="autor">Autor</Label>
									<Input
										id="autor"
										value={this.state.editBookData.autor}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.autor = e.target.value;
											this.setState({ editBookData });
										}}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="categoria">Categoria</Label>
									<Input
										id="categoria"
										value={this.state.editBookData.categoria}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.categoria = e.target.value;
											this.setState({ editBookData });
										}}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="descripcion">Descripcion</Label>
									<Input
										id="descripcion"
										value={this.state.editBookData.descripcion}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.descripcion = e.target.value;
											this.setState({ editBookData });
										}}
									/>
								</FormGroup>
								<FormGroup>
									<Label for="cantidad_pagina">Cantidad de pagina</Label>
									<Input
										id="cantidad_pagina"
										value={this.state.editBookData.cantidad_pagina}
										onChange={(e) => {
											let { editBookData } = this.state;
											editBookData.cantidad_pagina = e.target.value;
											this.setState({ editBookData });
										}}
									/>
								</FormGroup>
							</ModalBody>
							<ModalFooter>
								<Button color="primary" onClick={this.updateBook}>
									Update Book
								</Button>{' '}
								<Button color="secondary" onClick={this.toggleEditBookModal}>
									Cancel
								</Button>
							</ModalFooter>
						</Modal>
					</div>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th scope="col">id</th>
								<th scope="col">titulo</th>
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
									<td>{book.titulo}</td>
									<td>{book.contenido}</td>
									<td>{book.autor}</td>
									<td>{book.fecha_creacion.slice(0, 10).replace('T', ' ')}</td>
									<td>{book.categoria}</td>
									<td>{book.descripcion}</td>
									<td>{book.cantidad_pagina}</td>
									<td>
										<button
											type="button"
											className="btn btn-success mr-1"
											onClick={this.editBook.bind(
												this,
												book.idBook,
												book.titulo,
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
