import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems.map(
  ({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
  </li>`
);

gallery.insertAdjacentHTML("beforeend", markup.join(""));
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  const { target } = evt;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const url = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<div class="modal is-open"><img width="1280px" height="854px" src="${url}"/></div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onCloseModal);
      },
      onClose: () => {
        window.removeEventListener("keydown", onCloseModal);
      },
    }
  );
  instance.show();

  function onCloseModal(evt) {
    if (evt.key === "Escape") {
      const openModal = document.querySelector(".modal.is-open");
      if (openModal) {
        instance.close();
      }
    }
  }
}
