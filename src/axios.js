import axios from 'axios';

export const myaxios = axios.create({
    baseURL: 'https://61c6-94-139-148-243.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': '2024',
    },
});