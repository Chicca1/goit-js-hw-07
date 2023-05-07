import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryContainer = document.querySelector('.gallery');

function createGalleryItemMarkup(item) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        <div class="gallery__caption">${item.description}</div>
      </a>
    </li>
  `;
}

function renderGalleryItems(items) {
  const galleryItemsMarkup = items.map(item => createGalleryItemMarkup(item)).join('');
  galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);
}

renderGalleryItems(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250
});


console.log(galleryItems);
