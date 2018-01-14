import React from 'react';
import _ from 'lodash';
import Constants from '../../Constants';

import Question from '../Question/Question';

export default class Classic extends React.Component {
    state = {
        questions: []
    }
    generateQuestions = props => {
        const { fighters, gameMode } = props;

        let amt = 10;// amt of question for a game
        let questions = [];
        console.log(fighters);
        for(let i = 0; i < amt; i++) {
            questions.push(this.generateQuestion(_.shuffle(fighters), i));
        }
        this.setState({
            questions
        });
    }
    generateQuestion = (fighters, i) => {
        const selectedFighter = fighters[0];
        const wrongFighters = fighters.slice(1, 4);
        const type = _.shuffle(Constants.questionTypes)[0];
        const questionTemplate = _.shuffle(type.templates)[0];

        const question = '';//this.getQuestionText();
        const correct_answer = '';//this.getCorrectAnswer();
        const incorrect_answers = [];//this.getIncorrectAnswers();

        return {
            index: i,
            type: type.type,
            question,
            correct_answer,
            incorrect_answers,
            answered: false,
            correct: false,
            selectedFighter,
            wrongFighters
        };
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
    }
    componentWillReceiveProps(nextProps){
        if(!_.isEqual(this.props,nextProps)){
            this.generateQuestions(nextProps);
        }
    }
    render() {
        const questions = this.state.questions.map( question => 
            <Question key={question.index} {...question} /> 
        );
        return (
            <div>
                Classic
                {questions}
            </div>
        )
    }
}