// 1. Відмалювати розмітку (reduce, деструктур + шаблонний рядок)
// 2. Підставити в розмітку поля (${})
// 3. Навісити клік на галерею  (делегування)
// 4. Визначення ел по якому був клік (event.target)
// 5. Підставити данні у модалку з дата сорс (dataSet)
// 6. 
// import { galleryItems } from './gallery-items.js';

// // 1 створення розмітки
// const galleryImgContainer = document.querySelector(".gallery");
// const ImgMarkup = createImgMarkup(galleryItems);
// galleryImgContainer.insertAdjacentHTML('beforeend', ImgMarkup);

// function createImgMarkup (array) {
//     return array.reduce(
//         (acc, {original, preview, description}) => acc +
//           `<div class="gallery__item">
//             <a class="gallery__link" href="${original}">
//             <img
//                 class="gallery__image"
//                 src="${preview}"
//                 data-source="${original}"
//                 alt="${description}"
//               />
//             </a>
//           </div>`,
//         ""
//     );
// }

// // 2 делегування
// galleryImgContainer.addEventListener('click', onGalleryImgContainerClick);

// function onGalleryImgContainerClick(evt) {
//     evt.preventDefault();
//     const isGalleryImageEl = evt.target.classList.contains("gallery__image")
//     if (!isGalleryImageEl) {
//         return;
//     }
//     console.log(evt.target.dataset.source);   

//     const imgEl = evt.target;
//     const instance = basicLightbox.create(`<img src=${imgEl.dataset.source}>`);
//   instance.show();

    // const parentGalleryImage = imgEl.closest('.gallery__item')

    // removeOpenModalClass();
    // addOpenModalClass(parentGalleryImage)

    // console.log(parentGalleryImage);

    // модалка = imgEl.dataset.source;
    
    // console.log(curentOpenImage);
    // console.log(imgEl.classList);
// }

// function removeOpenModalClass() {
//     const curentOpenImage = document.querySelector('.gallery__item.modal__open');

//     if (curentOpenImage) {
//         curentOpenImage.classList.remove('modal__open')
//     }
// }

// function addOpenModalClass(img) {
//     img.classList.add('modal__open');
// }


// const curentActiveImg = document.querySelector('.modal-open');

