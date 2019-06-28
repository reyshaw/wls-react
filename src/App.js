import React, {Component} from 'react';
import './App.css';
// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
// import Player from './views/player/Player'
// import Agent from './views/agent/Agent'
import Entry from './practise/Entry'
class App extends Component {
  render () {
     return (
      <div className="App">
        <Entry />
      </div>
    )
  }
}

export default App;
