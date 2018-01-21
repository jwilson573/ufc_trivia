import React, { Component, PropTypes } from 'react';
import game from '../../state/game';
import classes from './Checkbox.scss';

class Checkbox extends Component {
    state={
        isChecked: false,
    }

    toggleCheckbox = () => {
        const { handleCheckboxChange } = this.props;

        this.setState(({ isChecked }) => ({
            isChecked: !isChecked
        }));

        // handleCheckboxChange();
    }
    render() {
        const weightclasses = [...game.weightclasses];
        // const {label} = 
        const { isChecked } = this.state;

        return (
            <div className={classes.Checkbox}>
                <label>
                    <input
                    type="checkbox"
                    // value={}
                    checked={isChecked}
                    onChange={this.toggleCheckbox}/>
                    
                </label>
            </div>
        )
    }
}

// Checkbox.propTypes = {
//     label: PropTypes.string.isRequired,
//     handleCheckboxChange: PropTypes.func.isRequired
// }

export default Checkbox;