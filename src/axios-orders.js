import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-a8450.firebaseio.com/'
});

export default instance;