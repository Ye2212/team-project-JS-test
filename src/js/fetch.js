import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "07e84016aeec599a5623106dff9619bb";


// export default 
async function fetchMovies(page, searchData){
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${searchData}`;
    // const response = await fetch(url);
    // const data = await response.json();
    // return data;
return await axios.get(`${url}`).then(response => response.data);
}

// export default 
async function fetchTrendingMovies(){
    const urlTrending = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
    return await axios.get(`${urlTrending}`).then(response => console.log(response.data))
}




export { fetchMovies, fetchTrendingMovies };


// language
// https://api.themoviedb.org/3/movie/550?api_key=07e84016aeec599a5623106dff9619bb
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2U4NDAxNmFlZWM1OTlhNTYyMzEwNmRmZjk2MTliYiIsInN1YiI6IjYxZWYwZTYzOWU0NTg2MDAxYjQ4YmM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RRiAdhzAN8BDY7u6qIa_HarSLKxjcE1C9TyTtDzNVMc