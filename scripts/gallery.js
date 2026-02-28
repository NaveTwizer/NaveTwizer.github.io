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
});