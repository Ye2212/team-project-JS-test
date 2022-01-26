import './sass/main.scss';
import { refs } from './js/refs';
import { fetchMoviesBySearch, fetchTrendingMovies } from './js/fetch';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
import simplelightbox from './js/simplelightbox';
import scrollSmooth from './js/scroll-smooth';
import movieCardTemplate from './templates/movie-card.hbs';

refs.form.addEventListener('submit', onFormSubmit);
let searchQuery = '';
let page = 1;


async function renderTrendingMovies (){
    const response = await fetchTrendingMovies(1);
 renderGalleryMarkup(response)
}

renderTrendingMovies()

async function onFormSubmit (e){
e.preventDefault();

searchQuery = e.currentTarget.searchQuery.value;

if (searchQuery.trim() === '') {
refs.heroNotificationText.classList.remove('is-hidden');
return;

}

try {

    const response = await fetchMoviesBySearch(page, searchQuery);
    if (response.results.length === 0) {
        refs.heroNotificationText.classList.remove('is-hidden');
        return;
    }
    refs.form.searchQuery.value = '';
    refs.gallery.innerHTML = '';
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