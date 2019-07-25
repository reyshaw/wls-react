import React, {Component} from 'react'
import LoginBefore from './LoginBefore'
import LoginAfter from './LoginAfter'
class LoginBar extends Component{
    constructor() {
        super()
        this.state = {
            token: '',
        }
    }

    render () {
        let comp = <LoginBefore />
        if (this.state.token) {
            comp = <LoginAfter />
        }
        return (
            <div className='header-loginbar'>
                {comp}
            </div>
        )
    }
}

export default LoginBar
