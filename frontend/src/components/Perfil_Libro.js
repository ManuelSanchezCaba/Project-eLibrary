import React, { Component } from 'react';
import Navegador from './Navegador';
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	// CardSubtitle,
	Button,
} from 'reactstrap';
import axios from 'axios';
// import { Redirect } from 'react-router-dom';

export default class Perfil_Libro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
		};
	}

	componentDidMount() {
		this.getBook();
	}

	getBook = async () => {
		const res = await axios.get(
			'http://localhost:4000/api/book/' + sessionStorage.getItem('idBook')
		);
		this.setState({ book: res.data });
	};

	render() {
		return (
			<div>
				<Navegador />
				<h1 className="p-2">Perfil</h1>
				<Card className="m-4">
					<CardBody>
						<CardTitle className="font-weight-bold">
							<i className="fas fa-book sizeP" />
							{this.state.book.titulo}
						</CardTitle>
						<hr />
						<CardText className="font-weight-bolder">Descripcion</CardText>
						<CardText className="font-weight-normal">
							{this.state.book.descripcion}
						</CardText>
						<Button className="mr-2" color="outline-primary">
							Leer el libro
						</Button>
						<Button color="outline-success">Escuchar el libro</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
