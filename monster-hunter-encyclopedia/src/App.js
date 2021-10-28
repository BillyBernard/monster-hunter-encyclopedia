import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Armor from './components/Armor';
import Decorations from './components/Decorations';
import Items from './components/Items';
import Locations from './components/Locations';
import Monsters from './components/Monsters';
import Weapons from './components/Weapons';
import HunterToDo from './components/HunterToDo';
import './App.css';

function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' />
        <Route path='/Armor'>
          <Armor />
        </Route>
        <Route path='/Decorations'>
          <Decorations />
        </Route>
        <Route path='/Items'>
          <Items />
        </Route>
        <Route path='/Locations'>
          <Locations />
        </Route>
        <Route path='/Monsters'>
          <Monsters />
        </Route>
        <Route path='/Weapons'>
          <Weapons />
        </Route>
        <Route path='/HunterToDo'>
          <HunterToDo />
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
