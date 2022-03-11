/**
 *
 *
   Crea un array composto da 12 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

   Infine stampa separatamente i 3 array.

 *
 */

const marche =['fiat', 'ferrari', 'mercedes', 'peugeot', 'volkswagen', 'bmw', 'seat'];
const modello =['citycar', 'sport','lusso', 'station-wagon', 'suv', 'trattore'];
const alimentazione = [ 'benzina', 'diesel', 'gpl', 'elettrico', 'metano'];

const autoPark =[];
function randomIntFromInterval(min, max) { // min and max included 
   return Math.floor(Math.random() * (max - min + 1) + min)
}
for (let i = 0; i < 12; i++){
   const singleCar = {};
   singleCar.marche = marche[randomIntFromInterval(0, marche.length -1)];
   singleCar.modello = modello[randomIntFromInterval(0, modello.length -1)];
   singleCar.alimentazione = alimentazione[randomIntFromInterval(0, alimentazione.length -1)];
   autoPark.push(singleCar)
}
console.table(autoPark)

const benzina =[];
const diesel =[];
const altre = [];

benzina = autoPark.filter()
