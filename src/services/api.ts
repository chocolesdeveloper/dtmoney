import axios from 'axios';

export const api = axios.create({
    /*Informa qual URL se repete em todas as ações*/
    baseURL: 'http://localhost:3000/api',
})