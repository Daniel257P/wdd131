document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector("#menu");

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('open');
    hambutton.classList.toggle('open');
})

const sitecontent = [
  {
    contentName: "Project Overview",
    subjectOfTheWebsite: "Subject of the Website:", 
    sujectOftheweb: "VeVe – Digital Collectibles Marketplace",
    sitePurpose: "Purpose: Educate and guide users about VeVe, a leading platform for buying, selling, and trading licensed digital collectibles.",
    imageUrl: "images/card-text.svg"
  },
  {
    contentName: "Content & Audience",
    plannedContent: "Overview of VeVe, features, tips for new users, NFT guide, personal collections, and $10 free offer.",
    domainNameConsiderations: "Domain Name Consideration: fandomshub.com",
    whyTheName: "Why the Name",
    whyname: " I chose FandomsHub.com because it clearly represents a central place for fans to connect and share their interests. The name is simple, memorable, and conveys community and engagement around fandom culture.",
    scenarios: "Questions from Target Audience",
    scenariosQ: "What is VeVe and how does it work? How do I buy my first digital collectible? What brands are available on VeVe? Are VeVe collectibles real NFTs? How can I trade or sell my collectibles? Is VeVe safe and trustworthy? What tips do you have for beginners? How do I claim the $10 free offer? ",
    imageUrl: "images/list-ul.svg"
  },
  {
    contentName: "Design & Layout",
    typography: "Headings: Montserrat, Body: Open Sans, Accent: Roboto",
    wireframesPlaceholders: "Homepage, Features Page, Brands Page, Guide Page, Collection Page",
    imageUrl: "images/palette2.svg"
  }
];

createsitecontentCard(sitecontent);

// Navigation buttons
const homelink = document.querySelector("#homebutton");
const overviewlink = document.querySelector("#overviewbutton");
const contentlink = document.querySelector("#contentbutton");
const designlink = document.querySelector("#designbutton");

// Event listeners for filtering
overviewlink.addEventListener("click", () => {
  filterContent("Project Overview");
  showDesignExtras(false);
});
contentlink.addEventListener("click", () => {
  filterContent("Content & Audience");
  showDesignExtras(false);
});
designlink.addEventListener("click", () => {
  filterContent("Design & Layout");
  showDesignExtras(true);
});
homelink.addEventListener("click", () => {
  createsitecontentCard(sitecontent);
  toggleIcons(false);
});


function filterContent(sectionName) {
    const filtered = sitecontent.filter(item => item.contentName === sectionName);
    createsitecontentCard(filtered);
    toggleIcons(true);
}

function createsitecontentCard(filteredsitecontents) {
  const container = document.querySelector(".container");
  container.innerHTML = ""; 

  filteredsitecontents.forEach(sitecontent => {
    let card = document.createElement("section");
    

    let siteName = document.createElement("h4");
    let name = document.createElement("h3");
    let subjectOfTheWebsite = document.createElement("h4");
    let sujectOftheweb = document.createElement("p");
    let sitePurpose = document.createElement("p");
    let plannedContent = document.createElement("p");
    let domainNameConsiderations = document.createElement("p");
    let scenariosQ = document.createElement("p");
    let scenarios = document.createElement("h4");
    let colorScheme = document.createElement("p");
    let typography = document.createElement("p");
    let wireframesPlaceholders = document.createElement("p");
    let img = document.createElement("img");
    let whyTheName = document.createElement ("h4");  
    let whyname = document.createElement ("p")  

    siteName.textContent = sitecontent.siteName ||"";
    name.textContent = sitecontent.contentName;
    subjectOfTheWebsite.textContent = sitecontent.subjectOfTheWebsite || "";
    sujectOftheweb.textContent = sitecontent.sujectOftheweb ||"";
    sitePurpose.textContent = sitecontent.sitePurpose || "";
    plannedContent.textContent = sitecontent.plannedContent || "";
    domainNameConsiderations.textContent = sitecontent.domainNameConsiderations || "";
    scenariosQ.textContent = sitecontent.scenariosQ || "";
    scenarios.textContent = sitecontent.scenarios || "";
    colorScheme.textContent = sitecontent.colorScheme || "";
    typography.textContent = sitecontent.typography || "";
    wireframesPlaceholders.textContent = sitecontent.wireframesPlaceholders || "";
    whyTheName.textContent = sitecontent.whyTheName ||"";
    whyname.textContent = sitecontent.whyname ||""; 

    [subjectOfTheWebsite, sitePurpose, plannedContent, domainNameConsiderations, scenarios, colorScheme, typography, wireframesPlaceholders].forEach(el => {
    if (!el.textContent.trim()) {
        el.style.display = "none";
    }
    });

    img.setAttribute("src", sitecontent.imageUrl);
    img.setAttribute("alt", `${sitecontent.contentName} icon`);
    img.setAttribute("loading", "lazy");

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(siteName);
    card.appendChild(subjectOfTheWebsite);
    card.appendChild(sujectOftheweb);
    card.appendChild(sitePurpose);
    card.appendChild(plannedContent);
    card.appendChild(domainNameConsiderations);
    card.appendChild(scenarios);
    card.appendChild(scenariosQ);
    card.appendChild(colorScheme);
    card.appendChild(typography);
    card.appendChild(wireframesPlaceholders);
    card.appendChild(whyTheName);
    card.appendChild(whyname);
    container.appendChild(card);
  });
}

function showDesignExtras(show) {
    const colorPalette = document.querySelector(".color-palette");
    const wireframe = document.querySelector(".wireframe");

    if (show) {
        colorPalette.style.display = "block";
        wireframe.style.display = "block";
    } else {
        colorPalette.style.display = "none";
        wireframe.style.display = "none";
    }
}

function toggleIcons(hide) {
  const container = document.querySelector(".container");
  if (hide) {
    container.classList.add("hide-icons");
  } else {
    container.classList.remove("hide-icons");
  }
}
