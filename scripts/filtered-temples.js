document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Santo Domingo Dominican Republic",
    location: "Santo Domingo Dominican Republic",
    dedicated:" 17 September 2000" ,
    area: 67000,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-1444-main.jpg"
  },
  {
    templeName: "Barranquilla Colombia" ,
    location: "Barranquilla Colombia" ,
    dedicated:" 9 December 2018" ,
    area: 25349,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-1846-main.jpg"
    },
    {
    templeName: "Sydney Australia" ,
    location: "Sydney Australia",
    dedicated:" 24 November 1991 " ,
    area:30067,
    imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    }
];

createTempleCard(temples);
const homelink = document.querySelector("#homebutton");
const oldlink = document.querySelector("#oldbutton");
const newlink = document.querySelector("#newbutton");
const largelink = document.querySelector("#largebutton");
const smalllink = document.querySelector("#smallbutton");

oldlink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>parseInt(temple.dedicated.match(/\d{4}/) )< 1900));
});
newlink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>parseInt(temple.dedicated.match(/\d{4}/) )> 2000));
});
largelink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>parseInt(temple.area)> 90000));
});
smalllink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple =>parseInt(temple.area)< 10000));
});
homelink.addEventListener("click", () => {
    createTempleCard(temples);
});


function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML= "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        
        name.textContent = temple.templeName; 
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name); 
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area); 
        card.appendChild(img);   
        document.querySelector(".container").appendChild(card);
    });
}
    
    
    
    
    
