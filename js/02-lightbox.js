import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageMarcup = createImageCardMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarcup);

// console.log(imageMarcup);

function createImageCardMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               
               alt="${description}"
              />
            </a>
        </div>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// console.log(galleryItems);
