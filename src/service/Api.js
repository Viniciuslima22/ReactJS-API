 import axios from "axios";
//base URL: https://api.themoviedb.org/3
//https://api.themoviedb.org/3/movie/popular?api_key=8a4020281ffe5ace8f1010868b581ac3&language=pt-BR


const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api