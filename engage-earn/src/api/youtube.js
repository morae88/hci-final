import axios from 'axios';
const KEY = 'AIzaSyDQKAAvcW4v-AdbFKdz7heTMWFgIejZ5Lo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 10,
        key: KEY
    }
})