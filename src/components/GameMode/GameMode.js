import React from 'react';
import { Button } from 'semantic-ui-react';
import classes from './GameMode.scss';
import game from '../../state/game';

export default class GameMode extends React.Component {
    state = {
        weightclasses: []
    }
    handleSelect = e => {
        let weightclasses = [...this.state.weightclasses];
        if(e.target.checked) {
            // Add weightclass
            weightclasses.push([e.target.value]);
        }else {
            // remove weightclass
        }
        this.setState({
            weightclasses 
        });
    }
    handleReady = () => {
        game.setWeightclass(this.state.weightclasses);
        this.props.history.push(`/${this.props.gameMode.toLowerCase()}`);
    }
    render() {
        return (
            <div>
                <button className={classes.Btn_bg}>
                    <div className={classes.Btn_txt}>{this.props.gameMode}</div>                    
                </button>
                { /* 
                    Accordion with list of checkboxes. Each checkboxes
                    should have an onChange={this.handleSelect.bind(this, weightclass)}
                */}

            </div>
        )
    }
}