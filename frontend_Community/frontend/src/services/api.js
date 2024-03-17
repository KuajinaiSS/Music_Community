import axios, { AxiosResponse } from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/api';
const responseBody = (response) => response.data;


const requests = {
    get: (url) => axios.get(url).then(responseBody),
    post: (url, body) => axios.post(url, body).then(responseBody),
    put: (url, body) => axios.put(url, body).then(responseBody),
    del: (url) => axios.delete(url).then(responseBody)
};


const users = {
    getAll: () => requests.get('/users'),
    getById: (id) => requests.get(`/users/${id}`),
    create: (userData) => requests.post('/users', userData)
};

const music = {
    upload: (musicData) => requests.post('/upload', musicData),
    getSongs: () => requests.get('/songs'),
    playSong: (id) => requests.get(`/play/${id}`)
};

const musicList = {
    getAll: () => requests.get('/musiclist'),
    getById: (id) => requests.get(`/musiclist/${id}`),
    create: (musicListData) => requests.post('/musiclist', musicListData)
};


const agent = { users, music, musicList };


export default agent;
