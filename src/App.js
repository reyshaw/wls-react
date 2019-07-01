import React, {Component} from 'react';
import './App.css';
import Entry from './practise/Entry'
import { toggle } from './practise/store/actions/todos';
import { connect } from 'react-redux';
class App extends Component {
  render () {
     return (
        <div className="App">
          <Entry />
        </div>
    )
  }
}

const mapStateToProps = state => ({
	...state
})
const mapDispatchToProps = dispatch => ({
	toggle: () => dispatch(toggle)
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
