const fighters = {
    data: [],
    setData: data => {
        fighters.data = data;
    },
    get: () => fighters.data
};

export default fighters;