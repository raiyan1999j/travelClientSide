import axios from 'axios';

export const publicRoute = axios.create({
    baseURL:"http://localhost:3000/"
})