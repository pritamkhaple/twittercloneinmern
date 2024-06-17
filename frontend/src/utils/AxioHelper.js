import axios from 'axios';

const privateAxios = axios.create({
    baseURL: 'https://twittercloneinmern-backend.vercel.app',
    withCredentials: true,
});

export default privateAxios;
