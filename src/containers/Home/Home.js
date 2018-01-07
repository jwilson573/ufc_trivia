import React, { Component } from 'react';
import classes from './Home.scss';
import Aux from '../../hocs/Aux';

class Home extends Component {
    state = {
        gameMode: {

        }
    }
    render () {
        return (
            <Aux>
                <div className={classes.Home}>
                    <h1>Splash Screen Placeholder</h1>
                </div>
            </Aux>

        )

    }
}

export default Home;