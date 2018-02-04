const game = {
    score: 0,
    questions: [],

    setQuestions: questions => {
        game.questions = questions;
    },
    getQuestions: () => game.questions
    
};

export default game;