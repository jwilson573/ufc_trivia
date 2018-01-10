import React from 'react';
import game from '../../state/game';

export default class Game extends React.Component {
    state = {
        weightclass: '',
        gameMode: '',
        questions: []
    }
    componentDidMount() {
        const { gameMode } = this.props.match.params;
        this.setState({
            gameMode,
            weightclasses: game.getWeightclasses
        }, () => {
            this.generateQuestions();
        });
    }
    generateQuestions = () => {
        const { gameMode, weightClass } = this.state;
    }
    render() {
        const questions = this.state.questions.map( question => 
            <Question key={question.index} {...question} /> 
        );
        return (
            <div>Game</div>
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