const app = new Vue(
    {
        el: '#app',
        data: {
            activeElement: 1,
            scrollElement: '',
            scrollRight: true,
            carousel: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
                },
            ]
        },
        methods: {
            nextElement: function (){
                if (this.activeElement == this.carousel.length - 1){
                    this.activeElement = 0;
                } else {
                    this.activeElement++;
                }
            },
            previousElement: function (){
                if (this.activeElement == 0){
                    this.activeElement = this.carousel.length - 1;
                } else {
                    this.activeElement--;
                }
            },
            selfScrolling: function(){
                this.scrollElement = setInterval(() =>{
                    //console.log(this);
                    if(this.scrollRight){
                        this.nextElement();
                    } else {
                        this.previousElement();
                    }
                }, 3000)
            },
            stopScrolling: function(){
                clearInterval(this.scrollElement);
                this.scrollElement = '';
            },
            specificElement: function(elementIndex){
                this.activeElement = elementIndex;
            },
            waveInversion: function(){
                this.scrollRight = !this.scrollRight;
            }
        }
    }    
)







