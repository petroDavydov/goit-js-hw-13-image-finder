import * as basicLightbox from "basiclightbox";

const instance = basicLightbox.create(`
    <div class="modal hidden">
        <img data-modal="largeImage" src="" alt="" />
    </div>
`);

const doOpenModal = (e) => {
  const imageTargetRef = e.target;
  if (!imageTargetRef.classList.contains("photo-image")) {
    return;
  }
  instance.show();
  const modalImage = document.querySelector('[data-largeImg="largeImage"]');
  modalImage.src = imageTargetRef.dataset.largeimage;
};

export default doOpenModal;
