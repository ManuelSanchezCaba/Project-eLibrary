import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import '../style/Libro.css';

export default class Libro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			libro: [],
			BookModal: true,
			redirectP: false,
		};
	}

	componentDidMount() {
		this.getBook();
	}

	toggleBookModal = () => {
		this.setState({ BookModal: !this.state.BookModal, redirectP: true });
	};

	getBook = async () => {
		const res = await axios.get(
			'/api/book/' + sessionStorage.getItem('idBook')
		);
		this.setState({ libro: res.data });
	};

	listenBook = (e) => {
		e.preventDefault();
		var speech = new SpeechSynthesisUtterance();

		// Set the text and voice attributes.
		speech.text = this.state.libro.contenido;
		speech.volume = 1;
		speech.rate = 1;
		speech.pitch = 1;
		speech.lang = 'es-ES';

		window.speechSynthesis.speak(speech);
	};

	render() {
		if (this.state.redirectP) {
			return <Redirect to={'/perfil_libro'} />;
		}

		return (
			<div>
				<Modal isOpen={this.state.BookModal} toggle={this.toggleBookModal}>
					<ModalHeader toggle={this.toggleBookModal}>
						{this.state.libro.titulo}
					</ModalHeader>
					<ModalBody>{this.state.libro.contenido}</ModalBody>
					<ModalFooter>
						<Button color="secondary" onClick={this.toggleBookModal}>
							Cancel
						</Button>
						<Button color="outline-success" onClick={this.listenBook}>
							Escuchar el libro
						</Button>
					</ModalFooter>
				</Modal>
			</div>
		);
	}
}
