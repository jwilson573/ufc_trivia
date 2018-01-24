import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import classes from './Home.scss';

import logo from '../../assets/imgs/mcgregor-cutout.png';

import GameMode from '../../components/GameMode/GameMode'
import AuxComponent from '../../hocs/AuxComponent';

class Home extends Component {

    state = {
        submitted: false,
        selected: false,
        modes: ['Classic', 'Timed', 'Survival']
    }

    buttonSelectHandler = () => {
        this.setState((prevState) => {
            return  { selected: !prevState.selected }
        })
    }

    render () {
        // let gameModes = this.state.modes.map((mode, idx)  => {
        //     return <GameMode 
        //             key={idx}
        //             gameMode={mode} 
        //             history={this.props.history} 
        //             gmIndex={idx}  />
        // }) 

        return (
            <AuxComponent>
                <div className={classes.Home}>
                    <h1>Select Game Mode</h1>
                    <div className={classes.Btn_group}>
                        <GameMode 
                        history={this.props.history}  />
                    </div>
                    <img className={[classes.Mcgregor, classes.slideInRight].join(' ')} src={logo} alt="mcgregor" />
                </div>
            </AuxComponent>
        )
    }
}

export default Home;