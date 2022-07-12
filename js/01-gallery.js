import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", getLargeImage);

createGalleryList();

function createGalleryList() {
  const galleryList = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      `<div class="gallery__item">
    <a class="gallery__link" href='${original}'>
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", galleryList);
}

function getLargeImage(event) {
  event.preventDefault();

  const filterValueEl = event.target.dataset.source;
  if (!filterValueEl) return;

  createLargeImage(filterValueEl);
}

function createLargeImage(url) {
  document.body.addEventListener("keydown", onCloseByEsc);

  const instance = basicLightbox.create(
    `
    <img width="1400" height="900" src="${url}"/>
  `
  );
  instance.show();

  function onCloseByEsc(event) {
    document.body.removeEventListener("keydown", onCloseByEsc);

    if (event.code === "Escape") instance.close();
  }
}
