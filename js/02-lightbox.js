import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

createGalleryList();

function createGalleryList() {
  const galleryList = galleryItems.reduce(
    (acc, { preview, original, description }) =>
      acc +
      ` <li><a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>
  `,
    ""
  );
  gallery.insertAdjacentHTML("beforeend", galleryList);
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: "bottom",
});
