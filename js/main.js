// Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.
// Prima la logica in italiano e poi traduciamo in codice.
// console.log() è nostro amico.
// Buon lavoro a tutte e a tutti!

const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//MILESTONE 1

for (let i = 0; i < team.length; i++){
  console.log(team[i].name);
  console.log(team[i].role);
  console.log(team[i].image);
}
//MILESTONE 2 (check footer)
for (let i = 0; i < team.length; i++){
  document.querySelector('div#ax-img').innerHTML += team[i].image + " ||| ";
  document.querySelector('div#ax-name').innerHTML += team[i].name + ", " + " ";
  document.querySelector('div#ax-role').innerHTML += team[i].role + ", " + " ";
  if (i == team.length -1){
    document.querySelector('div#ax-img').innerHTML += team[i].image + " |||";
    document.querySelector('div#ax-name').innerHTML += team[i].name + ".";
    document.querySelector('div#ax-role').innerHTML += team[i].role + ".";
  }
}

//BONUS TRIES
for (let i = 0; i < team.length; i++){
  createAndPopulateCards(i , team, 'cardlist', team[i].image, team[i].name, team[i].role );
}


/**
 * this function, given an array of objects with the same keys, creates cards with populated img, title and subtitle. Then puts the cards created into a container
 * @param {*} indexArgument // the number of the argument of the array you are going to select
 * @param {*} arrayArgument // the array you are going to extrapolate datas from
 * @param {*} container // the container where the cards are going into
 * @returns a single card
 */
function createAndPopulateCards (indexArgument, arrayArgument, container){
  let card= document.createElement('div');
  card.classList.add('ax-card');
  let cardImg = document.createElement('div');
  cardImg.classList.add('ax-img');
  cardImg.innerHTML = `<img class="img-fluid" src="img/${arrayArgument[indexArgument].image}" alt="Our valuable member ${arrayArgument[indexArgument].name}">`
  let cardName = document.createElement('div');
  cardName.classList.add('ax-name', 'fs-3');
  cardName.innerHTML = arrayArgument[indexArgument].name;
  let cardRole = document.createElement('div');
  cardRole.classList.add('ax-role', 'fs-4');
  cardRole.innerHTML = arrayArgument[indexArgument].role;
  card.appendChild(cardImg);
  card.appendChild(cardName);
  card.appendChild(cardRole);
  document.getElementById(container).appendChild(card);
  return card;
}
