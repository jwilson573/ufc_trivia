import React from 'react';
import { Route, Switch } from 'react-router-dom';
import game from '../../state/game';
import fighters from '../../state/fighters';

import Classic from '../../components/Classic/Classic';
import Weightclasses from '../../components/GameMode/Weightclasses/Weightclasses';

export default class Game extends React.Component {
    state = {
        fighters: [],
        questions: []
    }
    componentDidMount() {
        const { gameMode } = this.props.match.params;
        // This should already be set on the HOME page
        // For testing
        game.setWeightclasses(['Welterweight', 'Lightweight', 'Heavyweight']);

        const fightersByWeightclass = fighters.getWeightclass(game.getWeightclasses());
        this.setState({
            
            fighters: fightersByWeightclass
        });
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/play/classic" render={props => <Classic {...props} {...this.state} /> }  />
                    {/* <Route path="/select_weightclass" exact render={props => <Weightclasses {...props} {...this.state} /> }  /> */}
                    {/*<Route path="/play/survival" render={props => <Survival {...props} {...this.state} /> }  />*/}
                </Switch>
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