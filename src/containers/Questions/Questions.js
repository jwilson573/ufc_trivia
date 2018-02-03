import React, { Component } from 'react';
import _ from 'lodash';
import game from '../../state/game';
import Constants from '../../Constants';

class Questions extends Component {

    state = {
        questions: [],
        selectedFighterIds: []
    };

    componentWillReceiveProps(nextProps) {
        this.generateQuestionData(nextProps);
    }

    generateQuestionData = props => {
        const { fighters, gameMode } = props;
        const amt = 10;
        let questions = [];

        for(let i = 0; i < amt; i++) {
            const unselectedFighters = fighters.filter( fighter => !_.includes(this.state.selectedFighterIds, fighter.id));
            // Pass a randomized list of fighters to get question details
            const questionDetails = this.getQuestionDetails(_.shuffle(unselectedFighters));
            let question = {
                index: i,
                ...questionDetails,
                answered: false,
                correct: false
            };


            questions.push(question);
        }

        game.setQuestions(questions);
        this.setState({
            questions
        });
    };

    getQuestionDetails = fighters => {
        // Grab the first fighter as the selected fighter
        const selectedFighter = fighters[0];
        // The wrong fighters are everything else except the first index
        const wrongFighters = fighters.slice(1, fighters.length);
        // Gets a random question type from Constants
        const type = _.shuffle(Constants.questionTypes)[0];
        // Gets a random question template
        const questionTemplate = _.shuffle(type.templates)[0];

        // Gets the question text with the placeholders replaced with real data
        const question = this.getQuestionText(selectedFighter, questionTemplate);
        // Sets the correct answer to the selected fighters property
        const correctAnswer = selectedFighter[questionTemplate.answer];
        // Loops over wrong fighters and creates a list of incorrect answers
        const incorrectAnswers = this.getIncorrectAnswers(wrongFighters, correctAnswer, questionTemplate.answer);
        
        console.log(question, correctAnswer, incorrectAnswers);

        console.log(selectedFighter)

        this.setState({
            selectedFighterIds: this.state.selectedFighterIds.concat([selectedFighter.id])
        });

        return {
            type,
            question,
            correctAnswer,
            incorrectAnswers,
            image: selectedFighter.profile_image
        }
    }

    getQuestionText = (selectedFighter, questionTemplate) => {
        // Gets an array of all placeholders
        let placeholders = questionTemplate.question.match(/{(.*?)}/g);
        let question = questionTemplate.question;
        // Loop over each placholder and replace it with real data
        placeholders.forEach( placeholder => {
            // Gets the fighter property from the placeholder
            const property = placeholder.match(/{(.*?)}/)[1];
            // Use the property to get the real data from selected fighter
            const value = selectedFighter[property].trim();
            // Replace the placeholder with the real value
            question = question.replace(placeholder, value);
        });

        return question;
    }

    getIncorrectAnswers = (fighters, correctAnswer, property) => {
        let incorrectAnswers = [];
        let i = 0;
        // Loops until we have 3 incorrectAnswers
        while(incorrectAnswers.length < 3) {
            const fighter = fighters[i];
            // Makes sure that the incorrect answer is not the same as the correct answer
            if(fighter[property] !== correctAnswer && !_.includes(incorrectAnswers, fighter[property])) {
                incorrectAnswers.push(fighter[property]);
            }
            i++;
        }
        return incorrectAnswers;
    }

    renderQuestions = () => {
        return this.state.questions.map( question => (
            <div key={question.index}>
                <img src={question.image} height={150} /><br/>
                {question.question}<br/>
                {question.correctAnswer}<br/>
                {question.incorrectAnswers.join(', ')}
            </div>
        ));
    }

    render() {
        return (
            <div style={{ background: '#FFF'}}>
                Questions Component
                {this.renderQuestions()}
            </div>
        )

    }
}

export default Questions