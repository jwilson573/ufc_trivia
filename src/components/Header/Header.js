import React from 'react';
import classes from './Header.scss';
import logo from '../../assets/imgs/ufc_trivia.png';

const header = (props) => {
    return (
        <div className={classes.Header}>
            <img className={classes.Logo} src={logo} alt="ufc_trivia.png" />
        </div>
    )
}

export default header;