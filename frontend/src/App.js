import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AdminTable from './components/AdminTable';
import showBooks from './components/showBooks';
import Login from './components/Login';
import Register from './components/Register';
import Perfil_Libro from './components/Perfil_Libro';
import Libro from './components/Libro';

function App() {
	return (
		<Router>
			<Route exact path="/login" component={Login} />
			<Route exact path="/admin" component={AdminTable} />
			<Route exact path="/" component={showBooks} />
			<Route exact path="/signup" component={Register} />
			<Route exact path="/perfil_libro" component={Perfil_Libro} />
			<Route exact path="/libro" component={Libro} />
		</Router>
	);
}

export default App;
