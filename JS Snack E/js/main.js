/**
 *
 *
   Crea un array di oggetti che rappresentino delle persone.
   Ogni persona ha un nome, un cognome e un'età.
   
   Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const peopleList = [];
for (let i = 0; i < randomIntFromInterval(10, 20); i++){
   peopleList.push(generatePerson ())
}
console.table(peopleList)

function generatePerson (){
   const person = {};
   person.name = makeId(1).toUpperCase()+makeId(randomIntFromInterval(2, 7)).toLowerCase();
   person.lastName = makeId(1).toUpperCase()+makeId(randomIntFromInterval(2, 7)).toLowerCase();
   person.age = Math.floor(Math.random() * 100 + 1);
   return person
}
function makeId(length) {
   let result           = '';
   let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   let charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}