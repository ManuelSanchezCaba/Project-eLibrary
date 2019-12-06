import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardBody } from 'reactstrap'
import '../style/Libro.css';
export default class Libro extends Component {
    constructor(props) {
        super(props);
        this.state = {
          libro: {}
        };
      }
      
      componentDidMount() {
        this.getBook();
      }

      getBook = async () => {
		const res = await axios.get('http://localhost:4000/api/book/' + sessionStorage.getItem('idBook'));
		this.setState({ libro: res.data });
	};

    render() {
        return (
            <div>
            <Card>
                <CardBody classname="sizeL" ></CardBody>
            </Card>
            </div>
        );
    }
}