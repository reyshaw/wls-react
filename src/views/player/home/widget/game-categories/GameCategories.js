import React, {Component} from 'react'
import './game-categories.scss'
class GameCategories extends Component{
    render() {
        return (
            <div className='wls-game-categories'>
                <div className='content'>
                    <div className='row'>
                        <div className='col'>a</div>
                        <div className='col'>B</div>
                    </div>
                    <div className='row'>
                        <div className='col col-20'>a</div>
                        <div className='col'>B</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GameCategories
