import React, {Component} from 'react'

class TodoItem extends Component {
	
	render () {
		return (
			<li onClick={() => this.props.handleDelete()}>
				{this.props.content}
			</li>
		)
	}
}

export default TodoItem