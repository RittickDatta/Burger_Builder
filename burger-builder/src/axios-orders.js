import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-703ae.firebaseio.com/'
});

export default instance;

