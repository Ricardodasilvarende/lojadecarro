const slides = document.querySelectorAll(".carousel-item");
const indicators = document.querySelectorAll(".indicators li");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const carousel = document.querySelector(".carousel");

let currentIndex = 0;
let autoPlay;

function showSlide(index) {

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  indicators.forEach((indicator) => {
    indicator.classList.remove("active");
  });

  slides[index].classList.add("active");

  indicators[index].classList.add("active");

  currentIndex = index;
}

function nextSlide() {

  let nextIndex = currentIndex + 1;

  if (nextIndex >= slides.length) {
    nextIndex = 0;
  }

  showSlide(nextIndex);
}

function previousSlide() {

  let previousIndex = currentIndex - 1;

  if (previousIndex < 0) {
    previousIndex = slides.length - 1;
  }

  showSlide(previousIndex);
}

function startAutoPlay() {

  clearInterval(autoPlay);

  autoPlay = setInterval(() => {

    nextSlide();

  }, 6000);

}

nextButton.addEventListener("click", () => {

  nextSlide();

  startAutoPlay();

});

prevButton.addEventListener("click", () => {

  previousSlide();

  startAutoPlay();

});

indicators.forEach((indicator, index) => {

  indicator.addEventListener("click", () => {

    showSlide(index);

    startAutoPlay();

  });

});

carousel.addEventListener("mouseenter", () => {

  clearInterval(autoPlay);

});

carousel.addEventListener("mouseleave", () => {

  startAutoPlay();

});

document.addEventListener("keydown", (event) => {

  if (event.key === "ArrowRight") {

    nextSlide();

    startAutoPlay();

  }

  if (event.key === "ArrowLeft") {

    previousSlide();

    startAutoPlay();

  }

});

showSlide(0);

startAutoPlay();

