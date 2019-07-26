import React, {Component} from 'react'
import './index.scss'
import {Button} from 'element-react';
import Slider from '../../../components/slider/Slider';
import ServiceAdvantage from './widget/service-advantage/ServiceAdvantage'
import GameCategories from './widget/game-categories/GameCategories'

class Index extends Component {
	render () {
		return(
			<div>
				<Slider />
				<ServiceAdvantage />
				<GameCategories />
			</div>
		)
	}
}

export default Index
