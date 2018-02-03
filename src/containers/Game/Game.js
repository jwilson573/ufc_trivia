import React from 'react';
import { Route, Switch } from 'react-router-dom';
import game from '../../state/game';
import fighters from '../../state/fighters';
import classes from './Game.scss';

import Questions from '../Questions/Questions';


export default class Game extends React.Component {
    state = {
        fighters: []
    }

    componentDidMount() {
        const { gameMode, weightclass } = this.props.match.params;
        
        // This should already be set on the HOME page
        // For testing
        const fightersByWeightclass = fighters.getWeightclass(weightclass);
        // console.log(fightersByWeightclass);
        this.setState({ fighters: fightersByWeightclass });
    }
    render() {
        const { gameMode } = this.props.match.params;
        return (
            <div>
                {/* <TestPics fighters={this.state.fighters}/> */}
                <Questions 
                    fighters={this.state.fighters} 
                    gameMode={gameMode}
                />
            </div>
        )
    }
}

/*
{
    "index": number,
    "type": "multiple|5050|blank",
    "question": "Question text...",
    "correct_answer": "answer text",
    "incorrect_answers": [
        "Augsburg",
        "Bamberg",
        "Berlin"
    ],
    answered: true|false,
    correct: true|false
}		
*/


// class TestPics extends React.Component {
//     render() {
//         console.log("[TestPics]", this.props);
//         return (
//             this.props.fighters.map((fighter, i) => (
//                 <img key={i} src={fighter.profile_image} alt={fighter.first_name} className={classes.fighterPics} />
//             ))    

//         )

//     }
// }