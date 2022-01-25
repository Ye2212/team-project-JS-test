import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export default function simplelightbox(){
    let simplelightbox = new SimpleLightbox('.gallery a', { 
        captions: true,
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
});
    simplelightbox.refresh();
}