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
//milestone 2
for (let i = 0; i < team.length; i++){
  document.querySelector('div.ax-img').innerHTML += team[i].image + ", ";
  document.querySelector('div.ax-name').innerHTML += team[i].name + ", ";
  document.querySelector('div.ax-role').innerHTML += team[i].role + ", ";
}



//milestone 2
let teamName = team[0].name + " okok";
let teamRole;
let teamImg;
console.log(teamName);

// function createAndPopulateCards (){
//   let card;
//   element = document.createElement('div');
// }

// function elementCreator (number, container){
//   let element;
//   element = document.createElement('div');
//   element.classList.add('ax-numbers')
//   element.innerHTML= number;
//   document.getElementById(container).appendChild(element);
//   return element;
// }