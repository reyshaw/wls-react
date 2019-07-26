import React, {Component} from 'react'
import './service-advantage.scss'
class ServiceAdvantage extends Component{
    constructor() {
        super()
        this.state = {
            advs: [
                {label: '存款到账', val: 45},
                {label: '便捷的支付服务', val: 90},
                {label: '存款到账', val: 300},
                {label: '种类繁多的游戏', val: 60},
            ]
        }
    }

    render() {
        return (
            <div className='wls-service-advantage'>
                <div className='content'>
                    <h2 className='title'>
                        <strong>服务优惠</strong><span>Service Advantage</span>
                    </h2>
                    <ul>
                        {
                            this.state.advs.map((item, index) => {
                                return(
                                    <li key={index}>
                                        <p>
                                            <strong>{item.label}</strong>
                                            <span>平均时间</span>
                                        </p>
                                        <p>{item.val}</p>
                                        <p>秒</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default ServiceAdvantage
