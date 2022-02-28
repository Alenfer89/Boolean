/**
 * 
  In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.
 */

const guestList = ['aldo','poldo','franco','piero','giancarla','marina','franca','giuseppa','paola','sigurta'];

const guestName = prompt('il tuo nome').toLocaleLowerCase.trim();

let guestCheck = false;

for(let i = 0; i < guestList.length; i++){
  if (guestList[i].toLocaleLowerCase==guestName){
    guestCheck = true;
    
  }
}

if(guestCheck){
  alert('presente!')
  console.log('presente')
}else {
  alert('imbucato!')
  console.log('imbucato!')
}