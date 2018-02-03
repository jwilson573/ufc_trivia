import _ from 'lodash';

const fighters = {
    data: [],
    setData: data => {
        fighters.data = data;
    },
    getAll: () => fighters.data,
    getFighter: name => {
        const names = name.split(' ');
        return _.find(fighters.data, ({ first_name, last_name }) => {
            return first_name.toLowerCase() === names[0].toLowerCase()
                && last_name.toLowerCase() === names[1].toLowerCase();
        });
    },
    getWeightclasses: weightclasses => {
        return fighters.data.filter( fighter => {
            weightclasses = weightclasses.map( weightclass => {
                return weightclass.replace(' ', '_');
            });
            return _.includes(weightclasses, fighter.weight_class );
        });
    },
    getWeightclass: weightclass => {
        if(weightclass === 'all'){
            return fighters.data;
        }
        return fighters.data.filter( fighter => !!fighter.weight_class && weightclass === fighter.weight_class.toLowerCase());
    }
};

export default fighters;