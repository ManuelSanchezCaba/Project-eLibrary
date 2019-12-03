import React, { Component } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Navegador from './Navegador';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';





export default class Perfil_Libro extends Component {
    render() {
        return (
            <div>
                <Navegador />
                <h1 className="pd-2">Perfil</h1>
                <Card>
                    <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Breve descripcion</CardText>
                        <Button>Ver
						{this.cancel}
                        </Button>
                    </CardBody>
                </Card>
            </div >
        )
    }
}
