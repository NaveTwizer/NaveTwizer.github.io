<<<<<<< HEAD
const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
=======
const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

photos.forEach(photo => {
    photo.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;
    });
});

closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
>>>>>>> 035d15ee128b462cffa96a9d15fcb72f45cf3423
});