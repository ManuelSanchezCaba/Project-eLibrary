import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navegador from './components/Navegador';
import AdminTable from './components/AdminTable';
import showBooks from './components/showBooks';
import Login from './components/Login';

function App() {
	return (
		<Router>
			<Route exact path="/" component={Navegador} />
			<div className="container h-100 d-flex justify-content-center align-items-center">
				<Route exact path="/login" component={Login} />
				<Route exact path="/admin" component={AdminTable} />
				<Route exact path="/books" component={showBooks} />
			</div>
		</Router>
	);
}

export default App;
