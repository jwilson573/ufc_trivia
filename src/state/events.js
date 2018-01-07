const events = {
    data: [],
    setData: data => {
        events.data = data;
    },
    getAll: () => events.data
};

export default events;

// Todo: Add a date search by year