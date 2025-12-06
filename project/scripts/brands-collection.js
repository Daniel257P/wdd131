document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

const brands = [
  {
    brandsName: "Marvel Mightys",
    description: "These Marvel Mightys may look tiny, but they’re still full of power—a playful take on classic Marvel heroes. © 2021 MARVEL",
    imageUrl: "images/marvel_image.webp", 
    brandLink:"https://www.veve.me/collectibles/en/brands/c92feb01-ef87-4dcd-bb55-80d18cff7fa6"
  },
  {
    brandsName: "Disney Pixar UP",
    description: "Disney Pixar’s Up tells the story of Carl and Russell’s balloon-powered journey to South America. © 2024 DISNEY/PIXAR",
    imageUrl: "images/disney_image.webp",
    brandLink:"https://www.veve.me/collectibles/en/brands/659ee9f5-cc1b-4b8a-b7ac-299aa371d24b"
  },
  {
    brandsName: "DC",
    description: "DC, part of Warner Bros. Discovery, publishes iconic comics and graphic novels and brings its characters to life across film, TV, animation, games, and the DC Universe Infinite platform.",
    imageUrl: "images/dc_image.webp",
    brandLink:"https://www.veve.me/collectibles/en/brands/f72a405b-3acb-400d-a595-011c1511e29a"
  },
  {
    brandsName: "Jurassic Park",
    description: "Chris Pratt and Bryce Dallas Howard join the original cast in a global adventure where dinosaurs now live among humans, forcing humanity to fight for its place in a changed world.",
    imageUrl: "images/jurassic_image.webp",
    brandLink:"https://www.veve.me/collectibles/en/brands/508cf80b-e0c5-4638-948a-9a59bd1852f3"
  },
  {
    brandsName: "Star Wars",
    description: "Explore a curated set of iconic Star Wars vehicles—from Hoth to Tatooine and across the galaxy. © & TM Lucasfilm Ltd. All rights reserved.",
    imageUrl: "images/starwars_image.webp",
    brandLink:"https://www.veve.me/collectibles/en/brands/8c52ee6b-a973-428e-abd5-3780d8d9d9b5"
  },
];

createbrandsCard(brands);
const brandslinks = document.querySelector("#brandsbuttons");
const marvellinks = document.querySelector("#marvelbuttons");
const disneylinks = document.querySelector("#disneybuttons");
const dclinks = document.querySelector("#dcbuttons");
const jurassiclinks = document.querySelector("#jurassicbuttons");
const starwarslinks = document.querySelector("#starwarsbuttons");


brandslinks.addEventListener("click", () => {
    createbrandsCard(brands);
});
marvellinks.addEventListener("click", () => {
    createbrandsCard(brands.filter(b => b.brandsName === "Marvel Mightys"));
});

disneylinks.addEventListener("click", () => {
    createbrandsCard(brands.filter(b => b.brandsName === "Disney Pixar UP"));
});
dclinks.addEventListener("click", () => {
    createbrandsCard(brands.filter(b => b.brandsName === "DC"));
});
jurassiclinks.addEventListener("click", () => {
    createbrandsCard(brands.filter(b => b.brandsName === "Jurassic Park"));
});
starwarslinks.addEventListener("click", () => {
    createbrandsCard(brands.filter(b => b.brandsName === "Star Wars"));
});


function createbrandsCard(filteredbrandss) {
    document.querySelector(".container").innerHTML= "";
    filteredbrandss.forEach(brands => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let img = document.createElement("img");
        let description = document.createElement("p");
        let URL = document.createElement("a");
        
        name.textContent = brands.brandsName; 
        description.innerHTML = `<span class="label"></span> ${brands.description}`;
        URL.textContent = "See Collectibles";
        URL.href= brands.brandLink;
        URL.target = "_blank";
        URL.classList.add("btn");
        img.setAttribute("src", brands.imageUrl);
        img.setAttribute("alt", `${brands.brandsName} brands`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name); 
        card.appendChild(img);   
        card.appendChild(description);
        card.appendChild(URL);
        document.querySelector(".container").appendChild(card);
    });
}
