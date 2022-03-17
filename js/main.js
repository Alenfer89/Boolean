const app = new Vue(
    {
        el: '#app',
        data: {
            activeElement: 1,
            scrollElement: '',
            scrollRight: true,
            carousel: [
                {
                    image: 'https://www.robintur.it/img/viaggi/svezia/image-thumb__5314__galleryCarousel/Svezia%20Lago~-~300w.pjpeg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit',
                },
                {
                    image: 'https://www.worldatlas.com/r/w1200/upload/db/48/05/shutterstock-411078559.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum',
                },
                {
                    image: 'http://dhruvaoverseas.com/images/unk.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit',
                },
                {
                    image: 'https://www.voglioviverecosi.com/wp-content/uploads/2017/10/TRAFERIRSI-IN-GERMANIA-1900x1080.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'https://content.skyscnr.com/m/69db90b2040d20ec/original/french-polynesia-bora-bora-over-water-bungalows-with-steps-into-amazing-lagoon-thinkstockphotos-140796261.jpg?resize=1200px:1200px&quality=100',
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







