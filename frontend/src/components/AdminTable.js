import React, { Component } from 'react';
import axios from 'axios';

export default class AdminTable extends Component {
	state = {
		book: [],
	};

	async componentDidMount() {
		const res = await axios.get('http://localhost:4000/api/book');
		this.setState({ book: res.data });
	}

	onChangeBook = (e) => {
		console.log(e.target.value);
		this.setState({
			book: e.target.value,
		});
	};

	onSubmit = async (e) => {
		e.preventDefault();
		const res = await axios.post('http://localhost:4000/api/book', {
			book: this.state.book,
		});
		console.log(res);
	};

	render() {
		return (
			<div className="row">
				<div className="col-md-4">
					<div className="card card-body">
						<h3>Create new book</h3>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<input
									type="text"
									className="form-control"
									onChange={this.onChangeBook}
								/>
							</div>
							<button type="submit" className="container btn btn-primary">
								Save
							</button>
						</form>
					</div>
				</div>
				<div className="col-md-8">
					<ul className="list-group">
						{this.state.book.map((book) => (
							<li
								className="list-group-item list-group-item-action"
								key={book.idBook}
							>
								{book.autor}
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
