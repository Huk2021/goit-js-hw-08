import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';



import { galleryItems } from './gallery-items';



const galleryImages = document.querySelector('.gallery');
const cardsImage = createGalleryItemCardsImage(galleryItems);

galleryImages.insertAdjacentHTML('beforeend', cardsImage);

function createGalleryItemCardsImage(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
            <a class="gallery__item" href="${original}">
             <img class="gallery__image"
             src="${preview}"
             alt="${description}" />
            </a>
        `;
        })
        .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
    
 });


console.log(galleryItems);
