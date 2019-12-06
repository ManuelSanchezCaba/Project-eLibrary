import React, { Component } from 'react';
import Navegador from './Navegador';
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import '../style/Iconos.css';
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
		const res = await axios.get('/api/book');
		this.setState({ book: res.data });
	};

	cajaClick(id) {
		// e.preventDefault();
		this.setState({ redirectP: true });
		sessionStorage.setItem('idBook', id);
	}

	render() {
		if (this.state.redirectP) {
			return <Redirect to={'/perfil_libro'} />;
		}

		return (
			<div>
				<div>
					<Navegador />
					<div className="container p-4 rounded">
						<Row className="mb-4">
							{this.state.book.map((book) => (
								<Col
									onClick={this.cajaClick.bind(this, book.idBook)}
									key={book.idBook}
								>
									<Card body className="rounded">
										<i className="fas fa-book sizeS" />
										<CardTitle className="center font-weight-bold">
											{book.titulo}
										</CardTitle>
										<CardText className="center">{book.descripcion}</CardText>
										<CardText className="center font-italic">
											{book.autor}
										</CardText>
									</Card>
								</Col>
							))}
						</Row>
					</div>
				</div>
			</div>
		);
	}
}
