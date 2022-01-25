import './sass/main.scss';
import { refs } from './js/refs';
import { fetchMovies, fetchTrendingMovies } from './js/fetch';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import simplelightbox from './js/simplelightbox';
import scrollSmooth from './js/scroll-smooth';
import movieCardTemplate from './templates/movie-card.hbs';

refs.form.addEventListener('submit', onFormSubmit);
let searchQuery = '';
let page = 1;



// const responseTrending = fetchTrendingMovies();
// renderGalleryMarkup(responseTrending);
// console.log(responseTrending);


async function onFormSubmit (e){
e.preventDefault();

searchQuery = e.currentTarget.searchQuery.value;
// console.log(searchQuery);
if (searchQuery.trim() === '') {
    console.log('Please enter movie title');
}
try {

    const response = await fetchMovies(page, searchQuery);
    console.log(response);
    renderGalleryMarkup(response);
    scrollSmooth();
} 
catch(error){
    console.log(error);
}

}

function renderGalleryMarkup(res){
const galleryMarkup = res.results.map(item => movieCardTemplate(item)).join('');
gallery.insertAdjacentHTML('beforeend', galleryMarkup);
simplelightbox();
}