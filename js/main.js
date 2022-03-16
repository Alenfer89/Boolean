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
         title : 'Ciao io sono un titolozzo',
         subtitle : '',
         message : '',
         image: '',
         randomImg: '',
      },
      methods : {
         randomIntFromInterval : function(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
         },
         randomPic : function (){
            let random = this.randomIntFromInterval(1,999);
            console.log(random)
            return app.randomImg = `https://picsum.photos/id/${random}/200/300`;
         },
         messageViewer : function (){
            if (this.randomImg == ''){
               return 'immagine casuale';
            } else {
               return 'l\'immagine non esiste';
            }
         }
         
      }
   }
)

let scrivoAltro = 'apperò' ;
console.log(scrivoAltro);
console.log(app.message);
app.subtitle = scrivoAltro;
let immagineRandom = 'https://picsum.photos/id/237/200/300';
app.image = immagineRandom;