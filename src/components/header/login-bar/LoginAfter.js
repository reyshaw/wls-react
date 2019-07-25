import React, {Component} from 'react'
import {Badge, Button} from 'element-react'

class LoginAfter extends Component{
    render () {
        return (
            <ol>
                <li><Button size='small'>账号: bill</Button></li>
                <li><Button size='small'>会员中心</Button></li>
                <li><Badge value={12} size='small'><Button size='small'>我的消息</Button></Badge></li>
                <li><Button size='small'>额度转换</Button></li>
                <li><Button size='small'>我要存款</Button></li>
                <li><Button size='small'>我要取款</Button></li>
                <li><Button size='small'>我的钱包</Button></li>
                <li><Button size='small'>退出</Button></li>
            </ol>
        )
    }
}
export default LoginAfter
