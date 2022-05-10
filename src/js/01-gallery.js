import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import gallerySample from '../templares/gallery.hbs';
import { galleryItems } from './gallery-items';

const galleryNet = galleryItems.map(gallerySample);
const conteiner = document.querySelector('.gallery');

conteiner.insertAdjacentHTML('beforeend', galleryNet.join(''));

conteiner.addEventListener('click', () => {
  event.preventDefault();
});

const beautifulGallery = new SimpleLightbox('.gallery a');
beautifulGallery.on('show.simplelightbox', () => {
  beautifulGallery.defaultOptions.captionDelay = 250;
});
