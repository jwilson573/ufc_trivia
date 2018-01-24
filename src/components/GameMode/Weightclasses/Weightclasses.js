import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import classes from './Weightclasses.scss';
import homeClasses from '../../../containers/Home/Home.scss'


class Weightclasses extends Component{
    state = {
        selected: false,
        weightclasses: ['all','lightweight', 'middleweight', 'welterweight', 'lightheavyweight','heavyweight']

    }

    render(){
        console.log('[Weightclasses]',this.props)
        return (
            <div className={[homeClasses.Home, homeClasses.Btn_group].join(' ')}>
            {this.state.weightclasses.map((weightclass, idx) => {
                const names = this.state.selected ? [classes.Btn_bg, classes[`slideLeft${idx}`]].join(' ') : classes.Btn_bg;
                
                return (
                    <Link key={idx} to={`/play/${this.props.match.params.gameMode}/${weightclass}`.toLowerCase()} style={{ display: 'block' }}>
                        <button onClick={this.buttonSelectHandler} className={names} >
                            <div className={classes.Btn_txt}>{weightclass}</div>                    
                        </button>
                    </Link>
                )
            })}    
        </div>
        )
    }
}

export default Weightclasses;