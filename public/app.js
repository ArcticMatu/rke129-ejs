// Pildikarussell
const carousel = document.getElementById("carousel");

const images = [
  "images/dog.jpeg",
  "images/cats.jpeg"
];

let currentIndex = 0;

carousel.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  carousel.src = images[currentIndex];
});
