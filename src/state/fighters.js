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
    getWeightclass: weightclass => {
        return fighters.data.filter( fighter => fighter.weight_class === weightclass.replace(' ', '_') );
    }
};

export default fighters;