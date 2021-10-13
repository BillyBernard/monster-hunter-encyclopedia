import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Monsters from './components/Monsters';
import './App.css';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' />
        <Route path='/Monsters'>
          <Monsters />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
