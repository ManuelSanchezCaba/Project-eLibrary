import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

export default class Navegador extends Component {
	state = {
		eRead: '',
		eAd: '',
		redirect: false,
		ae: 'false',
		dnv: 'collapse navbar-collapse',
	};

	componentDidMount() {
		if (sessionStorage.getItem('userData')) {
			console.log('User logged in');
		} else {
			this.setState({ redirect: true });
		}
	}

	logout = (e) => {
		e.preventDefault();
		sessionStorage.setItem('userData', '');
		sessionStorage.clear();
		this.setState({ redirect: true });
	};

	navbarT = (e) => {
		e.preventDefault();
		if (this.state.ae === 'false') {
			this.setState({
				ae: 'true',
				dnv: 'collapse navbar-collapse show',
			});
		} else {
			this.setState({
				ae: 'false',
				dnv: 'collapse navbar-collapse',
			});
		}
	};

	render() {
		if (this.state.redirect) {
			return <Redirect to={'/login'} />;
		}

		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">
					eLibrary
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded={this.state.ae}
					aria-label="Toggle navigation"
					onClick={this.navbarT}
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className={this.state.dnv} id="navbarNav">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className={sessionStorage.getItem('eRead')}>
							<Link className="nav-link" to="/">
								eReader
							</Link>
						</li>
						<li className={sessionStorage.getItem('eAd')}>
							<Link className="nav-link" to="/admin">
								eAdmin
							</Link>
						</li>
					</ul>
					<form className="form-inline my-2 my-lg-0">
						<input
							className="form-control mr-sm-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
						/>
						<button
							className="btn btn-outline-info my-2 my-sm-0 m-2"
							color="info"
							type="submit"
						>
							Search
						</button>
						<button
							className="btn btn-outline-success my-2 my-sm-0"
							color="success"
							type="submit"
							onClick={this.logout}
						>
							Logout
						</button>
					</form>
				</div>
			</nav>
		);
	}
}
