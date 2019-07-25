import React, {Component} from 'react'

class DialogLinks extends Component{
    constructor () {
        super()
        this.state = {
            links: [
                {label: '客户端下载'},
                {label: '移动版'},
                {label: '加入收藏'},
                {label: '线路检测'},
                {label: '拍照展示'},
                {label: '在线客服'},
                {label: '简体中文'},
                {label: '系统当前时间(北京):2019/07/25 16:15:14'},
            ]
        }
    }
    render() {
        return (
            <ul className='header-dialoglink'>
                {
                    this.state.links.map((item, index) => {
                        return (
                            <li key={index}>{item.label}</li>
                        )
                    })
                }
            </ul>
        )
    }
}

export default DialogLinks
