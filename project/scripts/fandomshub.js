document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})


const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.slides');
let currentIndex = 0;
let slideInterval = setInterval(nextSlide, 3000); // Autoplay every 4s

function showSlide(index) {
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  slidesContainer.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  currentIndex = index;
}

function nextSlide() {
  if (currentIndex === slides.length - 1) {
    // Move to next (fake) slide
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

    // After animation ends, jump back to first slide without transition
    setTimeout(() => {
      slidesContainer.style.transition = 'none';
      slidesContainer.style.transform = 'translateX(0)';
    }, 500);

    currentIndex = 0;
    updateDots();
  } else {
    showSlide(currentIndex + 1);
  }
}

function updateDots() {
  dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
    clearInterval(slideInterval); // Stop autoplay when user interacts
  });
});