import React, {Component} from 'react'
import {Link} from "react-router-dom";
import "./nav.scss"

class Nav extends Component {
    handleClick = (type) => {
        console.log(type)
    }
    render () {
        return (
            <nav className='nav-menu'>
                <Link to='/player/home'>首页</Link>
                <Link to='' onClick={() => this.handleClick(1)}>平台特色</Link>
                <Link to='' onClick={() => this.handleClick(2)}>OG视讯</Link>
                <Link to='' onClick={() => this.handleClick(3)}>OG体育</Link>
                <Link to='/player/live'>真人娱乐</Link>
                <Link to='/player/electronic'>电子游艺</Link>
                <Link to='/player/sports'>体育竞技</Link>
                <Link to='/player/lottery'>彩票游戏</Link>
                <Link to='/player/fishing'>捕鱼游戏</Link>
                <Link to='/player/card'>棋牌游戏</Link>
                <Link to='/player/esports'>电子竞技</Link>
                <Link to='/player/promotion'>优惠活动</Link>
                <Link to='/player/trial'>试玩体验</Link>
            </nav>
        )
    }
}

export default Nav
