// Library of Characters:

//Bronze saints array ------------------------------------------------------------------------------------!

const bronzeSaints = [
  {
    name: "Ikki",
    constellation: "Phoenix",
    imgLink: "./IMGs/phoenix.webp",
  },
  {
    name: "Seiya",
    constellation: "Pegasus",
    imgLink: "./IMGs/seiya.webp",
  },
  {
    name: "Shiryu",
    constellation: "Dragon",
    imgLink: "./IMGs/dragon.webp",
  },
  {
    name: "Hyoga",
    constellation: "Cygnus",
    imgLink: "./IMGs/hyoga.webp",
  },
  {
    name: "Shun",
    constellation: "Andromeda",
    imgLink: "./IMGs/shun.webp",
  },
];


//Gold saints array --------------------------------------------------------------------------------------!

const goldSaints = [
  {
    name: "Mu",
    constellation: "Aries",
    imgLink: "./IMGs/mu.webp",
  },
  {
    name: "Aldebaran",
    constellation: "Taurus",
    imgLink: "./IMGs/taurus.webp",
  },
  {
    name: "Saga",
    constellation: "Gemini",
    imgLink: "./IMGs/saga.webp",
  },
  {
    name: "Deathmask",
    constellation: "Cancer",
    imgLink: "./IMGs/cancer.webp",
  },
  {
    name: "Aiolia",
    constellation: "Leo",
    imgLink: "./IMGs/leo.webp",
  },
  {
    name: "Dohko",
    constellation: "Libra",
    imgLink: "./IMGs/libra.webp",
  },
  {
    name: "Milo",
    constellation: "Scorpio",
    imgLink: "./IMGs/scorpio.webp",
  },
  {
    name: "Shura",
    constellation: "Capricorn",
    imgLink: "./IMGs/shura.webp",
  },
  {
    name: "Aiolos",
    constellation: "Sagittarius",
    imgLink: "./IMGs/sagittarius.webp",
  },
  {
    name: "Camus",
    constellation: "Aquarius",
    imgLink: "./IMGs/camus.webp",
  },
  {
    name: "Aphrodite",
    constellation: "Pisces",
    imgLink: "./IMGs/pisces.webp",
  },
  {
    name: "Shaka",
    constellation: "Virgo",
    imgLink: "./IMGs/shaka.webp",
  },
];

//Declaring global variables to access DOM elements within both functions---------------------------------!

const bronzeChars = document.querySelector("div");
const goldChars = document.querySelector("section");


// Bronze Saints section ---------------------------------------------------------------------------------!

bronzeSaints.forEach((bSaint) => {
  let bronzeEl = document.createElement("div");
  bronzeEl.classList.add("bronze-saint");

  let bronzeInnerHTML = `
      <div class="img-container">
          <img src="${bSaint.imgLink}" alt="${bSaint.name} />
      </div>
      <div class="info">
          <h3 class="constellation">${bSaint.constellation}</h3>
          <h3 class="name">${bSaint.name}</h3>        
      </div>
      `;

  bronzeEl.innerHTML = bronzeInnerHTML;
  bronzeChars.appendChild(bronzeEl);
});


// Gold Saints section ---------------------------------------------------------------------------------!

goldSaints.forEach((gSaint) => {
  let goldEl = document.createElement("div");
  goldEl.classList.add("gold-saint");

  let goldInnerHTML = `
      <div class="img-container">
          <img src="${gSaint.imgLink}" alt="${gSaint.name} />
      </div>
      <div class="info">
          <h3 class="constellation">${gSaint.constellation}</h3>
          <h3 class="name">${gSaint.name}</h3>        
      </div>
      `;

  goldEl.innerHTML = goldInnerHTML;
  goldChars.appendChild(goldEl);
});
