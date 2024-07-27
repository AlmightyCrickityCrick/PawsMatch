import axios from 'axios';

export const myaxios = axios.create({
    baseURL: 'https://0b79-188-244-19-111.ngrok-free.app',
    headers: {
        'ngrok-skip-browser-warning': '2024',
    },
});