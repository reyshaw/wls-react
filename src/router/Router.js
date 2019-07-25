import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Header from '../components/header/Header'

import Home from '../views/player/home/Home'
import Live from '../views/player/live/Live'
import Electronic from '../views/player/electronic/Electronic'
import Sports from '../views/player/sports/Sports'
import Lottery from '../views/player/lottery/Lottery'
import Fishing from '../views/player/fishing/Fishing'
import Card from '../views/player/card/Card'
import Esports from '../views/player/esports/Esports'
import Promotion from '../views/player/promotion/Promotion'
import Trial from '../views/player/trial/Trial'

const AppStyle = {
    position: `absolute`,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    minWidth: `1200px`
}

class ReactRouter extends Component {
    render () {
        return (
            <div className='App' style={AppStyle}>
                <Router>
                    <Header />
                    <Switch>
                        <Route path='/player/home' exact component={Home}/>
                        <Route path='/player/live' exact component={Live} />
                        <Route path='/player/electronic' exact component={Electronic} />
                        <Route path='/player/sports' exact component={Sports} />
                        <Route path='/player/lottery' exact component={Lottery}/>
                        <Route path='/player/fishing' exact component={Fishing}/>
                        <Route path='/player/card' exact component={Card}/>
                        <Route path='/player/esports' exact component={Esports}/>
                        <Route path='/player/promotion' exact component={Promotion}/>
                        <Route path='/player/trial' exact component={Trial}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default ReactRouter;
