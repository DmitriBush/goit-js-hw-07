import { galleryItems } from "./gallery-items.js";
// // Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageMarcup = createImageCardMarcup(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", imageMarcup);

galleryContainer.addEventListener("click", onImageClick);

// console.log(imageMarcup);

function createImageCardMarcup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
             <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
              />
            </a>
        </div>`;
    })
    .join("");
}

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") return;

  const selectedImage = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${selectedImage}" >
`);
  // console.log(selectedImage);
  instance.show();
}

// console.log(galleryItems);
