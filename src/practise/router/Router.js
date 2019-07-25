import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Index from '../../views/player/Player'
import Agent from '../../views/agent/Agent'

class ReactRouter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentWillMount () {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(json => {
      this.setState({
        list: json
      })
    })
  }
  render () {
     return (
      <div className="App">
        {
          this.state.list.map(item => {
            return <p key={item.id}>{item.title}</p>
          })
        }
        <Router>
          <Link to='/player'>会员</Link> | <Link to='/agent'>代理</Link>
          <h1>Hello world</h1>
          <Switch>
            <Route path='/player' component={Index}></Route>
            <Route path='/agent' exact component={Agent}></Route>
            <Route path='/agent/test' component={Index}></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default ReactRouter;
