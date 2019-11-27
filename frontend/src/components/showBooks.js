import React, { Component } from 'react';
import Navegador from './Navegador';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

export default class showBooks extends Component {
	constructor(props) {
		super(props);
		sessionStorage.setItem('eRead', 'nav-item active');
		if (sessionStorage.getItem('t_usuario') === 'eReader') {
			sessionStorage.setItem('eAd', 'd-none');
		} else {
			sessionStorage.setItem('eAd', '');
		}
	}

	render() {
		return (
			<div>
				<Navegador />
				<Row>
					<Col sm="6">
						<Card body>
							<CardTitle>Special Title Treatment</CardTitle>
							<CardText>
								With supporting text below as a natural lead-in to additional
								content.
							</CardText>
							<Button>Go somewhere</Button>
						</Card>
					</Col>
					<Col sm="6">
						<Card body>
							<CardTitle>Special Title Treatment</CardTitle>
							<CardText>
								With supporting text below as a natural lead-in to additional
								content.
							</CardText>
							<Button>Go somewhere</Button>
						</Card>
					</Col>
				</Row>
			</div>
		);
	}
}
