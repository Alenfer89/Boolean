const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];


let carouselWrapper='';
for (let i = 0 ; i < items.length ; i++){
  //! += fondamentale o il ciclofor continua a rimpiazzare il mio div
  carouselWrapper += `
  <div class="my-carousel-window w-100 d-none">
    <img src="${items[i]}" alt="random image" class="w-100 my-carousel-items">
  </div>`
}
const carousel = document.querySelector('div.my-carousel');
carousel.innerHTML += carouselWrapper;

let carouselWindow = document.getElementsByClassName('my-carousel-window');
carouselWindow[0].classList.remove('d-none');
let carouselThumbnail = document.getElementsByClassName('thumbnail');
carouselThumbnail[0].classList.add('active');

const nextButton = document.querySelector('span.my-next');
const preButton = document.querySelector('span.my-previous');
console.log(nextButton.classList)
//stabilisco la variabile contatore dei click
let activeElement = 0;
//event listener click
nextButton.addEventListener('click', function() {
  //al primo click la variabile col valore del contatore [0] non ha "d-none" e lo "ottiene"
  carouselWindow[activeElement].classList.add('d-none');
  carouselThumbnail[activeElement].classList.remove('active');
  console.log(activeElement)
  //aumento il contatore da [0] a [1]
  activeElement++;
  //con un if controllo il valore del contatore  
  if(activeElement >= items.length){
    //con valore pari o uguale alla lunghezza della lista, il contatore si resetta
    activeElement = 0;
    //il valore dell'array a questo punto viene resettato anche della classe e si riparte
    carouselWindow[activeElement].classList.remove('d-none');
    carouselThumbnail[activeElement].classList.add('active');
  } else if(activeElement < items.length){
    //se il contatore è ancora incluso nella lunghezza della lista/array, il valore al punto in cui sono perde la classe e viene mostrato, poi si riparte al prox click 
    carouselWindow[activeElement].classList.remove('d-none');
    carouselThumbnail[activeElement].classList.add('active');
  }
})
//! stessa roba di sopra ma resa in maniera più eleganete come in classe
preButton.addEventListener('click', function() {
  carouselWindow[activeElement].classList.add('d-none');
  carouselThumbnail[activeElement].classList.remove('active');
  //!soprattutto questa parte qua
  if (activeElement == 0){
    activeElement = carouselWindow.length -1;
  } else{
    activeElement--;
  }
  carouselWindow[activeElement].classList.remove('d-none');
  carouselThumbnail[activeElement].classList.add('active');
})

console.log(items.length)



