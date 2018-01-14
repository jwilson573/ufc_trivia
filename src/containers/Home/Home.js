import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import classes from './Home.scss';

import GameMode from '../../components/GameMode/GameMode'
import AuxComponent from '../../hocs/AuxComponent';

class Home extends Component {
    render () {
        return (
            <AuxComponent>
                <div className={classes.Home}>
                    <h1>Select Game Mode</h1>
                    <GameMode gameMode="Classic" history={this.props.history} />
                    <GameMode gameMode="Timed" history={this.props.history} />
                    <GameMode gameMode="Survival" history={this.props.history} />
                </div>
            </AuxComponent>
        )
    }
}

export default Home;