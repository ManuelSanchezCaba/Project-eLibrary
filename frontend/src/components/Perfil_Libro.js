import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
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

export default class Perfil_Libro extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
			redirectB: false,
		};
	}

	componentDidMount() {
		this.getBook();
	}

	getBook = async () => {
		const res = await axios.get(
			'https://elibrary07.herokuapp.com/api/book/' + sessionStorage.getItem('idBook')
		);
		this.setState({ book: res.data });
	};
// to read book
	readBook = (e) => {
		e.preventDefault();
		this.setState({ redirectB: true });
	};
//render
	render() {
		if (this.state.redirectB) {
			return <Redirect to={'/libro'} />;
		}

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
						<Button
							className="mr-2"
							color="outline-primary"
							onClick={this.readBook}
						>
							Leer el libro
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
