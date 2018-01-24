import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import classes from './GameMode.scss';
import game from '../../state/game';

export default class GameMode extends React.Component {
    state = {
        selected: false,
        modes: ['Classic', 'Timed', 'Survival'],
        selectedMode: ''
    }

    buttonSelectHandler = mode => {
        this.setState((prevState) => {
            return  { 
                selected: !prevState.selected,
                selectedMode: mode
            }
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.selected){
            setTimeout(() => {
                this.props.history.push(`/play/${this.state.selectedMode.toLowerCase()}`);
            }, 1000);
        }
    }

    render() {

            return(
                <div>
                    {this.state.modes.map((mode, idx) => {
                        const names = this.state.selected ? [classes.Btn_bg, classes[`slideLeft${idx}`]].join(' ') : classes.Btn_bg;
                        return (
                            <button onClick={() => this.buttonSelectHandler(mode)} className={names} >
                                <div className={classes.Btn_txt}>{mode}</div>                    
                            </button>
                        )
                    })}    
                </div>

            )
      
        
    }
}