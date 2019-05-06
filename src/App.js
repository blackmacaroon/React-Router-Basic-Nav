import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <div>
    <Navigation>
      <Route exact path="/" component={Home}>Home</Route>
      <Route exact path="/about" component={About}>About</Route>
      <Route exact path="/contact" component={Contact}>Contact</Route>
    </Navigation>
  </div>
);

export default App;
