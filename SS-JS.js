// Library of Characters:

//Bronze saints array ------------------------------------------------------------------------------------!

const bronzeSaints = [
  {
    name: "Ikki",
    constellation: "Phoenix",
    imgLink: "./IMGs/phoenix.png",
    info: "Ikki\" can be translated to as \"A Singular Point of Brilliance\", which denotes the character's lone wolf attitude as well as his above-average, fiery power."

  },
  {
    name: "Seiya",
    constellation: "Pegasus",
    imgLink: "./IMGs/seiya.png",
    info: "Seiya is one of the forty-eight Bronze Saints and is protected by the Pegasus Constellation so he wears the Pegasus Cloth."
  },
  {
    name: "Shiryu",
    constellation: "Dragon",
    imgLink: "./IMGs/dragon.webp",
    info: "Shiryu is considered the most mature of the five heroes, and thus the wisest. As the Bronze Saint of the Dragon constellation, Shiryu dons the emerald Dragon Bronze Cloth."
  },
  {
    name: "Hyoga",
    constellation: "Cygnus",
    imgLink: "./IMGs/hyoga.png",
    info: "Hyoga was trained by Aquarius Camus, and with him he learned to manipulate the ice. Following his master's teachings, he tries to remain rational in the face of everything, but he has an emotional side that he can\'t let go of."
  },
  {
    name: "Shun",
    constellation: "Andromeda",
    imgLink: "./IMGs/shun.png",
    info: "Shun is arguably one of the strongest in the series, although his gentle disposition and kind nature tend to prevent him from using his true power, unless he is forced to do so."
  },
  {
    name: "Geki",
    constellation: "Bear",
    imgLink: "./IMGs/bear_geki.png",
    info: "Geki was an orphan that got into the care of the Graad Foundation along with 99 others, owned by Japanese Mitsumasa Kido. Unknown to the boy, Mitsumasa was actually his and the other 99 children's father."
  },
  {
    name: "Ban",
    constellation: "Lionet",
    imgLink: "./IMGs/lionet_ban.png",
    info: "Ban was one of the hundred children that received training to become a saint, due to the grand vision of Mitsumasa Kido. "
  },
  {
    name: "Jabu",
    constellation: "Unicorn",
    imgLink: "./IMGs/unicorn_jabu.png",
    info: "Jabu is one of the 100 orphans that were sent by Mitsumasa Kido all over the world to train and bring back the Saints Cloths in order to protect his foster granddaughter, Saori Kido (Athena)."
  },
];


//Gold saints array --------------------------------------------------------------------------------------!

const goldSaints = [
  {
    name: "Mu",
    constellation: "Aries",
    imgLink: "./IMGs/mu.png",
    info: "Mu is one of the 12 gold saints. He is one of the bronze saint's most trusted allies, and serves as the man who repairs damaged cloths."
  },
  {
    name: "Aldebaran",
    constellation: "Taurus",
    imgLink: "./IMGs/taurus.png",
    info: "Aldebaran is one of the 12 Gold Saints of Sanctuary, with the Taurus as his destined constellation. He was physically the strongest of the Gold Saints in the modern era."
  },
  {
    name: "Saga",
    constellation: "Gemini",
    imgLink: "./IMGs/saga.png",
    info: "Gemini Saga is the Gold Saint in the constellation Gemini in Saint Seiya. It is said that he is the most powerful Gold Saint of his generation."
  },
  {
    name: "Deathmask",
    constellation: "Cancer",
    imgLink: "./IMGs/cancer.png",
    info: "Deathmask is the cruelest Golden Saint. His constellation is Cancer, and he was originally the keeper of the Temple of the same name, protecting the way to the Pontifical Chamber and the Statue of Athena along with the other eleven Golden Saints."
  },
  {
    name: "Aiolia",
    constellation: "Leo",
    imgLink: "./IMGs/leo.png",
    info: "Aiolia is one of the Gold Saints. He is of the Constellation Leo. Aiolia is impetuous and has a hot spirit that incites anger."
  },
  {
    name: "Dohko",
    constellation: "Libra",
    imgLink: "./IMGs/libra.png",
    info: "Dohko is one of the Gold Saints. He is one of the oldest characters in the manga next to Aries Shion. "
  },
  {
    name: "Milo",
    constellation: "Scorpio",
    imgLink: "./IMGs/scorpio.png",
    info: "Milo is one of the Gold Saints. He is the guardian of the 8th House in the Sanctuary, the Scorpius Temple."
  },
  {
    name: "Shura",
    constellation: "Capricorn",
    imgLink: "./IMGs/shura.png",
    info: "Shura belongs to the fabled rank of Gold Saint hierarchy among the other 12 Gold Saints. His Guardian Star is of the Zodiac sign of Capricornus."
  },
  {
    name: "Aiolos",
    constellation: "Sagittarius",
    imgLink: "./IMGs/sagittarius.png",
    info: "Aiolos s one of the 12 Guardians of Sanctuary, with the Sagittarius as his destined constellation. Aiolos is the famous Gold Saint who died protecting Athena when she was an infant."
  },
  {
    name: "Camus",
    constellation: "Aquarius",
    imgLink: "./IMGs/camus.png",
    info: "Camus is the Golden Knight of Aquarius, known as the \"Mage of water and ice\". He trained little Hyoga for six years in the icy lands of eastern Siberia, and was forced to fight against Hyoga at the battle of 12 houses."
  },
  {
    name: "Aphrodite",
    constellation: "Pisces",
    imgLink: "./IMGs/pisces.png",
    info: "Aphrodite was a Saint famous not only because of his beauty, but also for his reputation as one of the strongest among the 88 Saints. He is the saint of Pisces, and uses roses as his attack."
  },
  {
    name: "Shaka",
    constellation: "Virgo",
    imgLink: "./IMGs/shaka.png",
    info: "Shaka is a Gold Saint of the constellation Virgo, the most serene and one of the strongest. Shaka alone of all saints occupies the rarefied spot between God and man, but living between two worlds has its blessings as well as curses."
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
          <h3 class="constellation"><i class="fa-solid i-red fa-bahai"></i> ${bSaint.constellation}</h3>
          <h3 class="name"><i class="fa-solid i-blue fa-user"></i> ${bSaint.name}</h3>
          <p>${bSaint.info}</p>                  
      </div>
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
          <h3 class="constellation"><i class="fa-solid i-red fa-bahai"></i> ${gSaint.constellation}</h3>
          <h3 class="name"><i class="fa-solid i-blue fa-user"></i> ${gSaint.name}</h3>
          <p>${gSaint.info}</p>          
      </div>
      `;

  goldEl.innerHTML = goldInnerHTML;
  goldChars.appendChild(goldEl);
});


// JQuery -------------------------------------------------------------------------------------------------!
