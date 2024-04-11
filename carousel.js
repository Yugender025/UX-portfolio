const slides = document.querySelectorAll(".carousel-slide img");
const carouselSlide = document.querySelector(".carousel-slide");
const pagination = document.querySelector(".pagination");

let currentSlide = 0;
let slideWidth = slides[0].clientWidth;

function showSlide(index) {
  carouselSlide.style.transition = "transform 0.5s ease-in-out";
  carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
}

function setActivePagination(index) {
  const paginationDots = pagination.querySelectorAll("span");
  paginationDots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
  setActivePagination(currentSlide);
}

setInterval(nextSlide, 3000);

// Create pagination dots
slides.forEach((slide, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    currentSlide = i;
    showSlide(currentSlide);
    setActivePagination(currentSlide);
  });
  pagination.appendChild(dot);
});

// Recalculate slide width on window resize
window.addEventListener("resize", () => {
  slideWidth = slides[0].clientWidth;
  showSlide(currentSlide);
});

// Initial setup
showSlide(currentSlide);
setActivePagination(currentSlide);
