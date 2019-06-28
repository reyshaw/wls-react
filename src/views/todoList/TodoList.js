import React, {Component} from 'react'
import TodoItem from './todoItem/TodoItem'
class TodoList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			list: [],
			inputValue: ''
		}
	}
	
	handleChange (e) { // Input value has changed
		this.setState({
			inputValue: e.target.value
		})
	}
	handleAdd () { // add some items
		if (this.state.inputValue) {
			const list = [...this.state.list, this.state.inputValue]
			this.setState({
				list,
				inputValue: ''
			})
		}
	}
	handleDelete (index) { // delete some data
		const list = [...this.state.list]
		list.splice(index, 1)
		this.setState({
			list
		})
	}
	render () {
		return (
			<section>
				<input type='text'  value={this.state.inputValue} onChange={(e) => this.handleChange(e)}/>
				<button onClick={() => this.handleAdd()}>添加</button>
				<ul>
				{
					//this.state.list.map((item, index) => <li key={index} onClick={() => this.handleDelete(index)}>{item}</li>)
					this.state.list.map((item, index) => <TodoItem content={item} key={index} handleDelete={() => this.handleDelete(index)}/>)
				}
				</ul>
			</section>
		)
	}
}

export default TodoList