// Library of Characters:

const bronzeSaints = [
    {
      name: "Ikki",
      constellation: "Phoenix",
      imgLink: "./IMGs/"
    },
      {
      name: "Seiya",
      constellation: "Pegasus",
      imgLink: "./IMGs/"
    },
      {
      name: "Shiryu",
      constellation: "Dragon",
      imgLink: "./IMGs/"
    },
      {
      name: "Hyoga",
      constellation: "Cygnus",
      imgLink: "./IMGs/"
    },
      {
      name: "Shun",
      constellation: "Andromeda",
      imgLink: "./IMGs/"
    }
  
  ]
  
  const goldSaints = [
    {
      name: "Mu",
      constellation: "Aries",
      imgLink: "./IMGs/"
    },
      {
      name: "Aldebaran",
      constellation: "Taurus",
      imgLink: "./IMGs/"
    },
      {
      name: "Kanon",
      constellation: "Gemini",
      imgLink: "./IMGs/"
    },
      {
      name: "Deathmask",
      constellation: "Cancer",
      imgLink: "./IMGs/"
    },
      {
      name: "Aiolia",
      constellation: "Leo",
      imgLink: "./IMGs/"
    },
      {
      name: "Dohko",
      constellation: "Libra",
      imgLink: "./IMGs/"
    },
      {
      name: "Milo",
      constellation: "Scorpio",
      imgLink: "./IMGs/"
    },
      {
      name: "Shura",
      constellation: "Capricorn",
      imgLink: "./IMGs/"
    },
      {
      name: "Aiolos",
      constellation: "Sagittarius",
      imgLink: "./IMGs/"
    },
      {
      name: "Camus",
      constellation: "Aquarius",
      imgLink: "./IMGs/"
    },
      {
      name: "Aphrodite",
      constellation: "Pisces",
      imgLink: "./IMGs/"
    },
      {
      name: "Shaka",
      constellation: "Virgo",
      imgLink: "./IMGs/"
    }
  ]


  const bronzeChars = document.querySelector("div");



bronzeSaints.forEach(bSaint => {
      
      let bronzeEl = document.createElement('div');
      bronzeEl.classList.add('bronze-saint');
      
  
      let bronzeInnerHTML = `
      <div class="img-container">
          <img src="${bSaint.imgLink}" alt="${bSaint.name} />
      </div>
      <div class="info">
          <span class="constellation">${bSaint.constellation}</span>
          <h3 class="name">${bSaint.name}</h3>        
      </div>
      `;
  
      bronzeEl.innerHTML = bronzeInnerHTML;
      bronzeChars.appendChild(bronzeEl);
    });
