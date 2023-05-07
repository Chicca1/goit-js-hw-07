import { galleryItems } from './gallery-items.js';
// Change code below this line

  
  const galleryList = document.querySelector('.gallery');

//   galleryList.addEventListener('click', (event) => {
//     event.preventDefault();
// });

document.querySelector('.gallery').addEventListener('click', event => {
    event.preventDefault();
  
    const galleryItem = event.target.closest('.gallery__item');
  
    if (galleryItem) {
      const imageSrc = galleryItem.querySelector('.gallery__image').dataset.source;
      const instance = basicLightbox.create(`<img src="${imageSrc}" alt="" />`);
      instance.show();
  
  
      const closeOnEscape = event => {
        if (event.code === 'Escape' && instance.visible()) {
          instance.close();
        }
      };
      document.addEventListener('keydown', closeOnEscape);
  
      
      instance.on('close', () => {
        document.removeEventListener('keydown', closeOnEscape);
      });
    }
  });
  
 
  
  const createGalleryItem = ({ preview, original, description }) =>
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`;
  
  const galleryMarkup = galleryItems.map(createGalleryItem).join('');
  galleryList.insertAdjacentHTML('beforeend', galleryMarkup);

  


  

console.log(galleryItems);
