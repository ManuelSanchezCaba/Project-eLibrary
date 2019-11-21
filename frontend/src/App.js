import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navegador from './components/Navegador';
import Buscador from './components/Buscador';
import AdminTable from './components/AdminTable';
import showBooks from './components/showBooks';

function App() {
  return (
    <Router>
      <Navegador />

      <Route path="/" exact component={Buscador} />
      <Route path="/admin" component={AdminTable} />
      <Route path="/books" component={showBooks} />
    </Router>
  );
}

export default App;
