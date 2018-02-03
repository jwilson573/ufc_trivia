import React from 'react';

export default class Question extends React.Component {

    state = {
        correctAnswer: 20,
        incorrectAnswer: 10
    };

    render() {
        console.log(`Question ${this.props.index}: `, this.props);
        return (
            <div>
                Question #{this.props.index}
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