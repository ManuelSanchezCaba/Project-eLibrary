import React, { Component } from 'react';
import Navegador from './Navegador';
import { Card, Button, CardTitle, CardText, Row, Col, CardImg, } from 'reactstrap';
import axios from 'axios';

export default class showBooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			book: [],
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
		console.log('Click')
	};

	render() {
		return (
			<div>
				<Navegador />
				<div className="container p-5">
					<Row className="mb-4">
						{this.state.book.map((book) => (
						<Col sm="4" onClick={this.cajaClick} key={book.idBook}>
							<Card body>
								<CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
								<CardTitle>{book.titulo}</CardTitle>
								<CardText>{book.descripcion}
							</CardText>
								<Button>Ver</Button>
							</Card>
						</Col>
						))}

					</Row>

				</div>
			</div>
		
		);
	}
}
