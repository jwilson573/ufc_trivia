const questionTypes = [
    { 
        type: "multiple",
        templates: [{
            question: "What is FIGHTER_NAME's win record?",
            answer: "WINS"
        },{
            question: "How many losses does FIGHTER_NAME have?",
            answer: "LOSSES"
        }],
    },


    // "5050": [
    //     "FIGHTER_NAME has WINS wins?",
    //     "FIGHTER_NAME is in the WEIGHTCLASS division?",
    //     "FIGHTER_NAME is the current WEIGHTCLASS champion in the UFC?"
    // ],
    // "champ5050": [

    // ],
    // "blank": [

    // ]
];

const Constants = {
    API_URL: {
        default: "http://ufc-data-api.ufc.com/api/v3/iphone/1",
        alt: "http://ufc-data-api.ufc.com/api/v1/us"
    },
    weightclasses: ['all','flyweight','bantam_weight','lightweight', 'middleweight', 'welterweight', 'light_heavyweight','heavyweight'],
    questionTypes
};

export default Constants;