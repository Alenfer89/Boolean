
/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */


const zucchine =[];
const varietàDiZucchina = ['nera', 'romana', 'napoletana', 'gialla', 'striata', 'trombetta'];
for (let i = 0; i < 10; i++){
   const object = {};
   object.verdura = 'zucchina';
   object.varietà = varietàDiZucchina[randomIntFromInterval(0, varietàDiZucchina.length - 1)];
   object.peso = randomDecFromInterval(0.2, 0.8);
   object.lunghezza = randomIntFromInterval(6, 20);
   zucchine.push(object);
}
console.table(zucchine)
let peso = 0;
zucchine.forEach(element => {
   peso +=parseFloat(element.peso);
});
console.log(peso)


const zucchineSimpatiche = zucchine.filter ((element) => {
   if (element.lunghezza <= 15){
      return element
   }
})
const zucchinePro = zucchine.filter ((element) => {
   if (element.lunghezza > 15){
      return element
   }
})
console.table(zucchineSimpatiche)
console.table(zucchinePro)

function randomIntFromInterval(min, max) {
   return Math.floor(Math.random() * (max - min + 1) + min)
}
function randomDecFromInterval(min, max) {
   return (Math.random() * (max - min) + min).toFixed(2);
}