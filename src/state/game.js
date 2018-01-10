const game = {
    weightclasses: [],
    setWeightclass: weightclasses => {
        game.weightclasses = weightclasses;
    },
    getWeightclasses: () => game.weightclasses
};

export default game;