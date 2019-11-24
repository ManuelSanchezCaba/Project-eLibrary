import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import '../css/Login.css';

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			user: [],
			redirec: false,
		};
	}

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	login = async (e) => {
		e.preventDefault();
		const res = await axios.get('http://localhost:4000/api/authentication');
		this.setState({ user: res.data });
		this.state.user.map((user) => {
			if (
				user.user === this.state.username &&
				user.password === this.state.password
			) {
				sessionStorage.setItem('userData', user);
				this.setState({ redirec: true });
			} else {
				console.log('login error!');
			}
		});
	};

	render() {
		if (this.state.redirec) {
			return <Redirect to={'/'} />;
		}

		if (sessionStorage.getItem('userData')) {
			return <Redirect to={'/'} />;
		}

		return (
			<form className="form-signin ">
				<h1>Login</h1>
				<div className="form-group">
					<label for="username">Username</label>
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
					<label for="password">Password</label>
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
							onClick={this.login}
						/>
					</div>
				</div>
			</form>
		);
	}
}
