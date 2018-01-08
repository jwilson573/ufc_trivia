import React from 'react';
import classes from './Header.scss';
// import logo from '../../assets/imgs/ufc_trivia.png';
import logo from '../../assets/imgs/ufc_small.png';
import { Link } from 'react-router-dom';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <img className={classes.Logo} src={logo} alt="ufc_trivia.png" />
            <ul>                
                <li><Link to="/">New Game</Link></li>
                <li><Link to="/leaderboards">Leaderboards</Link></li>
            </ul>
        </div>
    )
}

export default header;