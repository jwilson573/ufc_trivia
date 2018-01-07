const events = {
    data: [],
    setData: data => {
        events.data = data;
    },
    get: () => events.data
};

export default events;