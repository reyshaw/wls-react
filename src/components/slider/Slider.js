import React, {Component} from 'react'
import {Carousel} from 'element-react'

class Slider extends Component{
    render() {
        return (
            <div className="demo-2 small">
                <Carousel indicatorPosition="inside" interval={4000}>
                    {
                        [1,2,3,4].map((item, index) => {
                            return (
                                <Carousel.Item key={index}>
                                    <img src={`http://172.16.135.103/ui/gfx_frontend/banner/banner${item}.jpg`}
                                         alt="img"
                                         style={{height: '100%', width: '100%'}}/>
                                </Carousel.Item>
                            )
                        })
                    }
                </Carousel>
            </div>
        )
    }
}

export default Slider
