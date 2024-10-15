const app = new Vue(
    {
        el: '#app',
        data:{
            disksList:[],
            genre : ''
        },
        methods:{
            filter: function(){
                if(this.genre !== ''){
                    axios.get('http://localhost/51%20php-ajax-dischi/php-ajax-dischi/data/controller.php?genre=' + this.genre.toLowerCase())
                    .then((result) => {
                        this.disksList = result.data.results;
                        //this.genre = '';
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                } else {
                    axios.get('http://localhost/51%20php-ajax-dischi/php-ajax-dischi/data/controller.php')
                    .then((result) => {
                        this.disksList = result.data.results;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
                }
            } 
        },
        created(){
            axios.get('http://localhost/51%20php-ajax-dischi/php-ajax-dischi/data/controller.php')
            .then((result) => {
                this.disksList = result.data.results;
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
)