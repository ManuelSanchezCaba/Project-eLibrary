import React, { Component } from 'react'
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap'
//import '../css/Register.css'
import { Button } from 'reactstrap';

export default class Register extends Component {
    render() {
        return (

            <div>
                <Form className="form-signin">
                    <h1>Sign Up</h1>
                    <Row form>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="User">Usuario</Label>
                                <Input type="text" name="user" id="UserName" placeholder="User Name" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="Password">Password</Label>
                                <Input type="password" name="password" id="Password" placeholder="Your Password" />
                            </FormGroup>
                        </Col>
                    </Row>
                    <FormGroup>
                        <Label for="Name">Nombre</Label>
                        <Input type="text" name="name" id="Name" placeholder="Your Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="Email">Email@</Label>
                        <Input type="email" name="email" id="Email" placeholder="Example@example.com" />
                    </FormGroup>
                    <Button className="Button" color='success'>Sign In</Button>
                </Form>     
            </div>


        )
    }
}
