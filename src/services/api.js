import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3000/'
    baseURL: 'http://192.168.0.8:3000'
});