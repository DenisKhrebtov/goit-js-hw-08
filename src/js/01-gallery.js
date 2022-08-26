// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const divRef = document.querySelector('.gallery');
const cardsMarkup = createGallary(galleryItems);

divRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createGallary(items) {
  return items
    .map(({ original, preview, description }) => {
      return `<a class="gallery__item" 
            href="${original}">
            <img class="gallery__image" 
            src="${preview}" 
            alt="${description}" 
            />
            </a>`;
    })
    .join('');
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
