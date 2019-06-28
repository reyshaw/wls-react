import React, {Component} from 'react'
import TodoList from './todoList/TodoList'

class Entry extends Component {

	 render () {
	    return (
	      <div className="App">
	        <TodoList />
	      </div>
	    )
	}
}

export default Entry