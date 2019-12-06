import React, { Component } from 'react';
import Navegador from './Navegador';
import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardSubtitle,
	Button,
} from 'reactstrap';

export default class Perfil_Libro extends Component {
	render() {
		return (
			<div>
				<Navegador />
				<h1 className="p-2">Perfil</h1>
				<Card className="m-4">
					<CardBody>
						<i className="fas fa-book size" />
						<CardTitle>Title</CardTitle>
						<CardSubtitle>Card subtitle</CardSubtitle>
						<CardText>Breve descripcion</CardText>
						<Button>
							Ver
							{this.cancel}
						</Button>
					</CardBody>
				</Card>
			</div>
		);
	}
}
