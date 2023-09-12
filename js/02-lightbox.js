import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const options = {
  captionsData: "alt",
  captionDelay: 250,
};

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}">
    </a>
  </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));

new SimpleLightbox(".gallery a", options);
