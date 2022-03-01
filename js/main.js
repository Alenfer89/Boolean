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

const nextButton = document.querySelector('span.my-next');

let activeElement = 0;
nextButton.addEventListener('click', function() {
  carouselWindow[activeElement].classList.add('d-none');
  activeElement++;
  carouselWindow[activeElement].classList.remove('d-none');
})



