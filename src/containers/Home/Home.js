import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import classes from './Home.scss';

import logo from '../../assets/imgs/mcgregor-cutout.png';

import GameMode from '../../components/GameMode/GameMode'
import AuxComponent from '../../hocs/AuxComponent';

class Home extends Component {
    render () {
        return (
            <AuxComponent>
                <div className={classes.Home}>
                    <h1>Select Game Mode</h1>
                    <div className={classes.Btn_group}>
                            <GameMode gameMode="Classic" history={this.props.history} />
                       
                            <GameMode gameMode="Timed" history={this.props.history} />
                   
                            <GameMode gameMode="Survival" history={this.props.history} />
    
                    </div>
                    <img className={classes.Mcgregor}src={logo} alt="mcgregor" />
                </div>
            </AuxComponent>
        )
    }
}

export default Home;