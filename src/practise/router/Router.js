import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Player from '../views/player/Player'
import Agent from '../views/agent/Agent'
class ReactRouter extends Component {
  render () {
     return (
      <div className="App">
        <Router>
          <Link to='/player'>会员</Link> | <Link to='/agent'>代理</Link>
          <h1>Hello world</h1>
          <Switch>
            <Route path='/player' component={Player}></Route>
            <Route path='/agent' exact component={Agent}></Route>
            <Route path='/agent/test' component={Player}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default ReactRouter;
