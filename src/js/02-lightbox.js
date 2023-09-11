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

let lightbox;

gallery.addEventListener("click", (evt) => {
  evt.preventDefault();

  const { target } = evt;
  if (target.classList.contains("gallery__image")) {
    const index = galleryItems.findIndex(
      (item) => item.original === target.parentElement.href
    );

    if (!lightbox) {
      lightbox = new SimpleLightbox(".gallery a", options);
    }

    lightbox.open(index);
  }
});

document.addEventListener("keydown", onKeyPress);

function onKeyPress(evt) {
  if (evt.key === "ArrowLeft" && lightbox) {
    lightbox.prev();
  } else if (evt.key === "ArrowRight" && lightbox) {
    lightbox.next();
  } else if (evt.key === "Escape" && lightbox) {
    lightbox.close();
  }
}
