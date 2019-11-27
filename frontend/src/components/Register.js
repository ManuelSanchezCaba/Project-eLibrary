import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Col, Row, Form, FormGroup, Label, Input } from 'reactstrap';
import { Button } from 'reactstrap';

export default class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			new_user: {
				user: '',
				password: '',
				nombre: '',
				tipo_usuario: 'eReader',
				email: '',
			},
			cancel_redirec: false,
			value: 'eReader',
			classN: 'd-none',
		};
	}

	componentWillMount() {
		if (sessionStorage.getItem('cancel_redirec') === '/admin') {
			this.setState({ classN: '' });
		}
	}

	signin = async (e) => {
		e.preventDefault();
		console.log(this.state.new_user.tipo_usuario);
		await axios
			.post('http://localhost:4000/api/authentication', this.state.new_user)
			.then((response) => {
				console.log(response.data);
				this.setState({
					cancel_redirec: true,
					new_user: {
						user: '',
						password: '',
						nombre: '',
						tipo_usuario: 'eReader',
						email: '',
					},
				});
			});
	};

	cancel = (e) => {
		e.preventDefault();
		this.setState({ cancel_redirec: true });
	};

	handdleChange = (e) => {
		let { new_user } = this.state;
		new_user.tipo_usuario = e.target.value;
		this.setState({ value: e.target.value, new_user });
	};

	render() {
		if (this.state.cancel_redirec) {
			return <Redirect to={sessionStorage.getItem('cancel_redirec')} />;
		}

		return (
			<div className="container h-100 d-flex justify-content-center align-items-center">
				<Form className="form-signin">
					<h1 className="pd-2">Sign Up</h1>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Label for="UserName">Usuario</Label>
								<Input
									type="text"
									name="username"
									id="UserName"
									placeholder="User Name"
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.user = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="Password">Password</Label>
								<Input
									type="password"
									name="password"
									id="Password"
									placeholder="Your Password"
									onChange={(e) => {
										let { new_user } = this.state;
										new_user.password = e.target.value;
										this.setState({ new_user });
									}}
								/>
							</FormGroup>
						</Col>
					</Row>
					<FormGroup>
						<Label for="Name">Nombre</Label>
						<Input
							type="text"
							name="name"
							id="Name"
							placeholder="Your Name"
							onChange={(e) => {
								let { new_user } = this.state;
								new_user.nombre = e.target.value;
								this.setState({ new_user });
							}}
						/>
					</FormGroup>
					<FormGroup className={this.state.classN}>
						<Label for="tipo_usuario">Tipo de Usuario</Label>
						<Input
							type="select"
							name="select"
							id="tipo_usuario"
							value={this.state.value}
							onChange={this.handdleChange}
						>
							<option value="eReader">eReader</option>
							<option value="eAdmin">eAdmin</option>
						</Input>
					</FormGroup>
					<FormGroup>
						<Label for="Email">Email</Label>
						<Input
							type="email"
							name="email"
							id="Email"
							placeholder="Example@example.com"
							onChange={(e) => {
								let { new_user } = this.state;
								new_user.email = e.target.value;
								this.setState({ new_user });
							}}
						/>
					</FormGroup>
					<Row form>
						<Col md={6}>
							<FormGroup>
								<Button
									className="Button btn-block"
									color="primary"
									onClick={this.signin}
								>
									Sign In
								</Button>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Button
									className="Button btn-block"
									color="secondary"
									onClick={this.cancel}
								>
									Cancel
								</Button>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</div>
		);
	}
}
