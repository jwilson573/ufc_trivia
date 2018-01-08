import React, { Component } from 'react';
import classes from './Home.scss';
import AuxComponent from '../../hocs/AuxComponent';

class Home extends Component {
    state = {
        gameMode: {

        }
    }
    render () {
        return (
            <AuxComponent>
                <div className={classes.Home}>
                    <h1>Game Mode Placeholder</h1>
                </div>
            </AuxComponent>

        )

    }
}

export default Home;