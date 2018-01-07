import axios from 'axios';
import Constants from '../Constants';
const { API_URL } = Constants;

const API = {
    getFighters: () => {
        return axios.get(`${API_URL.default}/fighters`);
    },
    getEvents: () => {
        return axios.get(`${API_URL.default}/events`);
    }
};

export default API;
