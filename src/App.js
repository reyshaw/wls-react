import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Player from './views/player/Player'
import Agent from './views/agent/Agent'

class App extends Component {
  render () {
     return (
      <div className="App">
        <Router>
        <ul>
          <li>
            <Link to='/player'>会员</Link>
          </li>
           <li>
            <Link to='/agent'>代理</Link>
          </li>
        </ul>
          <Switch>
            <Route path={'/player'} component={Player}></Route>
            <Route path={'/agent'} component={Agent}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
