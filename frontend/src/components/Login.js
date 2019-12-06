import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../style/Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			user: [],
			redirec: false,
			redirectS: false,
		};
		sessionStorage.setItem('t_usuario', '');
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	login = async (e) => {
		e.preventDefault();
		let check = false;
		const res = await axios.get('/api/authentication');
		this.setState({ user: res.data });
		this.state.user.map((user) => {
			if (
				user.user === this.state.username &&
				user.password === this.state.password
			) {
				check = true;
				if (user.tipo_usuario === 'eReader') {
					sessionStorage.setItem('t_usuario', 'eReader');
				} else {
					sessionStorage.setItem('t_usuario', 'eAdmin');
				}
				sessionStorage.setItem('userData', user);
				this.setState({ redirec: true });
				return user;
			}
		});

		if (!check) {
			alert(
				'Usuario o contraseña incorrecto. Por favor ingresar sus credenciales.'
			);
		}
	};

	signup = (e) => {
		e.preventDefault();
		sessionStorage.setItem('cancel_redirec', '/login');
		this.setState({ redirectS: true });
	};

	render() {
		if (this.state.redirec) {
			return <Redirect to={'/'} />;
		}

		if (this.state.redirectS) {
			return <Redirect to={'/signup'} />;
		}

		if (sessionStorage.getItem('userData')) {
			return <Redirect to={'/'} />;
		}

		return (
			<div className="container h-100 d-flex justify-content-center align-items-center">
				<form className="form-signin">
					<h1>Login</h1>
					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							placeholder="username"
							name="username"
							className="form-control"
							onChange={this.onChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							placeholder="password"
							name="password"
							className="form-control"
							onChange={this.onChange}
						/>
					</div>
					<div className="row">
						<div className="col-xs-6 col-sm-6 col-md-6">
							<input
								type="submit"
								name="login"
								value="login"
								className="btn btn-primary btn-block"
								onClick={this.login}
							/>
						</div>
						<div className="col-xs-6 col-sm-6 col-md-6">
							<input
								type="submit"
								name="signup"
								value="signup"
								className="btn btn-secondary btn-block"
								onClick={this.signup}
							/>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
