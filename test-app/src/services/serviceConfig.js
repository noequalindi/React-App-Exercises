import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: `https://s3.amazonaws.com/technical-challenge/v3`,
    timeout: 10000
});

export default AxiosInstance;