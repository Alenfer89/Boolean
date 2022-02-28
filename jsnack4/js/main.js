/**
 * 
  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */


//creo un array con una lista di nomi
const guestList = ['aldo','poldo','franco','piero','giancarla','marina','franca','giuseppa','paola','sigurta'];
//creo una variabile tramite il prompt della quale recupero info dall'utente ('.toLocaleLowerCase' ed '.trim' aggiunti a seguito della correzione perchè non me li ricordavo )
const guestName = prompt('il tuo nome').toLocaleLowerCase.trim();

//creo una flag con valori booleani per verificare poi la presenza in lista dell'utente
let guestCheck = false;
//con un ciclo procedo a controllare il nome utente immesso con i nomi in lista. In caso positivo la variabile booleana assume significato opposto
for(let i = 0; i < guestList.length; i++){
  if (guestList[i].toLocaleLowerCase==guestName){
    guestCheck = true;
  }
}
//tramite l'if finale stampo il risultato. Se la variabile flag avrà un riscontro positivo nel ciclo for allora, assumendo il valore di true, verra stampato il primo if, in caso conmtrario verrà stampato il secondo
if(guestCheck){
  alert('presente!')
  console.log('presente')
}else {
  alert('imbucato!')
  console.log('imbucato!')
}