import React, { Component } from 'react';
import classes from './Home.scss';

class Home extends Component {
    state = {
        gameMode: {

        }
    }
    render () {
        return (
            <div>
                <div className={classes.Home}>
                    <h1>Game Mode Placeholder</h1>
                </div>
            </div>

        )

    }
}

export default Home;