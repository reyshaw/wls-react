import {createStore} from 'redux'
import rootReducer from './reducers/todos'

function store (state = {show: false}) {
    return createStore(rootReducer, state)
}

export default store