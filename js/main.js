/**
 * 
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data, magari volendo sperimentare anche prendendola da un input.
 */


const app = new Vue (
   {
      el: '#app',
      data : {
         message : 'Ciao io sono un titolozzo',
         subtitle : '',
      }
   }
)

let scrivoaltro = 'apperò' ;
console.log(scrivoaltro)
console.log(app.message)
app.subtitle = scrivoaltro;
//'Ciao io sono un titolozzo'