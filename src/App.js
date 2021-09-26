import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/pages/Form'
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';


function App() {
  return (
     
    
    <Router>

    <Navbar/>
    <Form/>

    </Router>
  );
}

export default App;
