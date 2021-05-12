import './App.css';
import React from 'react';

import {Router} from '@reach/router';
import Home from './components/Home';
import Number_or_Word from './components/Number_or_Word';
import ColorfulWord from './components/ColorfulWord';


function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Number_or_Word path="/:num_or_word"/>
        <ColorfulWord path="/:word/:textColor/:color"/>
      </Router>
    </div>
  );
}

export default App;