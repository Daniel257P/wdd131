document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

//----------------Solo para mi pagina index o principal----------------------
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const slidesContainer = document.querySelector('.slides');

if (slidesContainer && slides.length && dots.length) {
  let currentIndex = 0;
  let slideInterval = setInterval(nextSlide, 3000); 

  function showSlide(index) {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    currentIndex = index;
  }

  function nextSlide() {
    if (currentIndex === slides.length - 1) {
      
      slidesContainer.style.transition = 'transform 0.5s ease-in-out';
      slidesContainer.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;


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
      clearInterval(slideInterval);
    });
  });
}


// ------------------------ solo Para mi pagina "contact-page--------------------------
const selectElement = document.getElementById("brandsName");
if (selectElement) {
  const Brands = [
    { id: "marvel01", name: "Marvel"},
    { id: "disney01", name: "Disney" },
    { id: "dc01", name: "DC"},
    { id: "jurassicpark01", name: "Jurassic Park"},
    { id: "starwars01", name: "Star Wars"}
  ];

  Brands.forEach(b => {
    const option = document.createElement("option");
    option.value = b.id;       
    option.textContent = b.name; 
    selectElement.appendChild(option);
  });
}
  let reviewCount = localStorage.getItem("reviewCount");
  if (!reviewCount) {
    reviewCount = 0;
  }
  reviewCount = parseInt(reviewCount) + 1;
  localStorage.setItem("reviewCount", reviewCount);
