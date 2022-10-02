const slides = document.querySelectorAll(".slide");

for (const slide of slides) {
  slide.addEventListener("mouseover", () => {
    clearActive();

    slide.classList.add("active");
  });
}

const clearActive = () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
};

function nonActive() {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
}
