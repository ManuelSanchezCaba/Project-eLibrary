import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AdminTable from './components/AdminTable';
import showBooks from './components/showBooks';
import Login from './components/Login';
import Register from './components/Register';

function App() {
	return (
		<Router>
			<Route exact path="/login" component={Login} />
			<Route exact path="/admin" component={AdminTable} />
			<Route exact path="/" component={showBooks} />
			<Route exact path="/signup" component={Register} />
		</Router>
	);
}

export default App;
