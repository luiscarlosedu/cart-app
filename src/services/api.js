import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3000/'
    baseURL: 'http://192.168.0.5:3000'
});