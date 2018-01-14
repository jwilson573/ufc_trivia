const game = {
    weightclasses: [],
    setWeightclasses: weightclasses => {
        game.weightclasses = weightclasses;
    },
    getWeightclasses: () => game.weightclasses
};

export default game;