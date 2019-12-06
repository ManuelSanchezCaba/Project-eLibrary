import React, { Component } from 'react';
import axios from 'axios';
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

export default class NewBook extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newBookModal: false,
			newBookData: {
				titulo: '',
				contenido: '',
				autor: '',
				categoria: '',
				descripcion: '',
				cantidad_pagina: '',
				Accion: '',
			},
		};
	}

	toggleNewBookModal = () => {
		this.setState({ newBookModal: !this.state.newBookModal });
	};

	getBook = async () => {
		const res = await axios.get('http://localhost:4000/api/book');
		this.setState({ book: res.data });
	};

	addBook = async () => {
		axios
			.post('http://localhost:4000/api/book', this.state.newBookData)
			.then((response) => {
				console.log(response.data);
				this.setState({
					book: [],
					newBookModal: false,
					newBookData: {
						titulo: '',
						contenido: '',
						autor: '',
						fecha_creacion: '',
						categoria: '',
						descripcion: '',
						cantidad_pagina: '',
						Accion: '',
					},
				});
			});
	};

	fileBook = () => {
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader();
			var textFile = /text.*/;
			let { newBookData } = this.state;

			if (file.type.match(textFile)) {
				reader.onload = function(event) {
					newBookData.contenido = event.target.result;
				};
				this.setState({ newBookData });
			}
			reader.readAsText(file);
		} else {
			alert('Este navegador no acepta la api FileReader');
		}
	};

	render() {
		return (
			<div>
				<Button
					className="my-2"
					color="primary"
					onClick={this.toggleNewBookModal}
				>
					Add Book
				</Button>
				<Modal
					isOpen={this.state.newBookModal}
					toggle={this.toggleNewBookModal}
				>
					<ModalHeader toggle={this.toggleNewBookModal}>
						Add a new Book
					</ModalHeader>
					<ModalBody>
						<FormGroup>
							<Label for="titulo">Titulo</Label>
							<Input
								id="titulo"
								value={this.state.newBookData.titulo}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.titulo = e.target.value;
									this.setState({ newBookData });
								}}
							/>
						</FormGroup>

						<FormGroup>
							<Label for="contenido">Contenido</Label>
							<Input
								id="contenido"
								value={this.state.newBookData.contenido}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.contenido = e.target.value;
									this.setState({ newBookData });
								}}
							/>
							<Input type="file" name="file" onChange={this.fileBook} />
						</FormGroup>
						<FormGroup>
							<Label for="autor">Autor</Label>
							<Input
								id="autor"
								value={this.state.newBookData.autor}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.autor = e.target.value;
									this.setState({ newBookData });
								}}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="categoria">Categoria</Label>
							<Input
								id="categoria"
								value={this.state.newBookData.categoria}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.categoria = e.target.value;
									this.setState({ newBookData });
								}}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="descripcion">Descripcion</Label>
							<Input
								id="descripcion"
								value={this.state.newBookData.descripcion}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.descripcion = e.target.value;
									this.setState({ newBookData });
								}}
							/>
						</FormGroup>
						<FormGroup>
							<Label for="cantidad_pagina">Cantidad de pagina</Label>
							<Input
								id="cantidad_pagina"
								value={this.state.newBookData.cantidad_pagina}
								onChange={(e) => {
									let { newBookData } = this.state;
									newBookData.cantidad_pagina = e.target.value;
									this.setState({ newBookData });
								}}
							/>
						</FormGroup>
					</ModalBody>
					<ModalFooter>
						<Button color="primary" onClick={this.addBook}>
							Add Book
						</Button>{' '}
						<Button color="secondary" onClick={this.toggleNewBookModal}>
							Cancel
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
