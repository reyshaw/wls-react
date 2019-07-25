import React, {Component} from 'react'
import './header.scss'
import DialogLinks from './dialog-links/DialogLinks'
import Nav from './nav/Nav'
import LoginBar from './login-bar/LoginBar'

class Header extends Component{
    render() {
        return (
            <div className="wls-header">
                <div className='header-top'>
                    <div className="content">
                        <img src={require(`./logo.png`)} alt="logo"/>
                        <DialogLinks />
                        <LoginBar/>
                    </div>
                </div>
                <div className='header-nav'>
                    <div className="content">
                        <Nav />
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
