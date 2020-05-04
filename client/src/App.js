import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import AppNavbar from './components/AppNavbar';
import { NavbarToggler } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
    </div>
  );
}

export default App;
