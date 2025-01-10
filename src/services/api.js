import axios from "axios";

export const api = axios.create({
    // baseURL: 'http://localhost:3000/'
    baseURL: process.env.EXPO_PUBLIC_IP_CONFIG
});