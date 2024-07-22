import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/"

const api = axios.create ({
    baseURL: "http://localhost:8000/api/",
    headers: {
        "Content-Type": "application/json"
    }, 
    timeout: 10000,
})

export default api

