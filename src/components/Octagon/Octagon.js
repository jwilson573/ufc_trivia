import React from 'react';
import classes from './Octagon.scss';
import octagon_img from '../../assets/imgs/octagon.png';
const octagon = (props) => {
    return (
        <div className={classes.Div}>
            <img className={classes.Octagon} src={octagon_img} alt="octagon.png" />
        </div>
    )
}


export default octagon;