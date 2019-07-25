import React, {Component} from 'react'
import {Button, Input} from "element-react";

class LoginBefore extends Component{
    constructor() {
        super()
        this.state = {
            user: {
                name: '', // 用户名
                pwd: '', // 密码
                code: '' // 验证码
            }
        }
    }
    /***
     * 忘记用户名或者密码
     * @param a [1-用户名, 2-密码]
     */
    handleForgetBtn = (a) => {
        if (a === 1) {
            console.log(`忘记用户名`)
        } else {
            console.log(`忘记密码`)
        }
    }
    /***
     * 登录按钮
     */
    handleLogin = () => {
        console.log(this.state.user)
    }
    /***
     * 注册按钮
     */
    handleRegister = () => {
        console.log(`注册`)
    }
    /***
     * 试玩按钮
     */
    handleTrial = () => {
        console.log(`试玩`)
    }
    render () {
        return (
            <div>
                <Input placeholder={`请输入用户名`}
                       size="small"
                       value={this.state.user.name}
                       append={<span onClick={() => this.handleForgetBtn(1)}>忘记</span>}
                       minLength={4}
                       trim={true}
                       onIconClick={this.handleIconClick}/>
                <Input type='password'
                       placeholder={`请输入密码`}
                       size="small"
                       value={this.state.user.pwd}
                       append={<span onClick={() => this.handleForgetBtn(2)}>忘记</span>}/>
                <Button type='primary'
                        size='small'
                        onClick={() => this.handleLogin()}>
                    登录</Button>
                <Button type='primary'
                        size='small'
                        onClick={() => this.handleRegister()}>
                    注册</Button>
                <Button type='primary'
                        size='small'
                        onClick={() => this.handleTrial()}>
                    试玩</Button>
            </div>
        )
    }
}

export default LoginBefore
