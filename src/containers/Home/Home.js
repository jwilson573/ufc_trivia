import React, { Component } from 'react';
import classes from './Home.scss';
import AuxComponent from '../../hocs/AuxComponent';
import { Button } from 'semantic-ui-react';

class Home extends Component {
    render () {
        return (
            <AuxComponent>
                <div className={classes.Home}>
                    <h1>Select Game Mode</h1>
                    <Button color="red" size="massive">Classic</Button>
                    <Button color="red" size="massive">Timed</Button>
                    <Button color="red" size="massive">Survival</Button>
                </div>
            </AuxComponent>

        )

    }
}

export default Home;