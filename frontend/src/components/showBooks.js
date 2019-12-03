import React, { Component } from 'react';
import Navegador from './Navegador';
import { Card, CardTitle, CardText, Row, Col, CardImg, } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default class showBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
			redirectP: false,
		};
		sessionStorage.setItem('eRead', 'nav-item active');
		if (sessionStorage.getItem('t_usuario') === 'eReader') {
			sessionStorage.setItem('eAd', 'd-none');
		} else {
			sessionStorage.setItem('eAd', '');
		}
	}

	componentDidMount() {
		this.getBook();
	}

	getBook = async () => {
		const res = await axios.get('http://localhost:4000/api/book');
		this.setState({ book: res.data });
	};

	cajaClick = (e) => {
		e.preventDefault();
		this.setState({ redirectP: true });
		console.log('Click')
	};

	render() {
		if(this.state.redirectP) {
			return <Redirect to={'/perfil_libro'} />;
		}

		return (
			<div>
				<div>
				<Navegador />
				<div className="container p-5">
					<div className="container h-100 d-flex justify-content-center align-items-center">
						<Row className="mb-4">
							{this.state.book.map((book) => (
								<Col sm="4" onClick={this.cajaClick} key={book.idBook}>
									<Card body>
										<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" type="submit" />
										<CardTitle>{book.titulo} </CardTitle>
										<CardText>{book.descripcion}
										</CardText>
									</Card>
								<input
								type="submit"
								name="ver"
								value="ver"
								className="btn btn-secondary btn-block"
								onClick={this.Perfil_Libro}
								/>
								</Col>
							))}
						</Row>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
