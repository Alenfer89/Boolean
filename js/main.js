const app = new Vue(
    {
        el: '#app',
        data:{
            disksList:[],
            genre : ''
        },
        created(){
            axios.get('http://localhost/51%20php-ajax-dischi/php-ajax-dischi/data/controller.php')
            .then((result) => {
                this.disksList = result.data.results;
            })
            .catch((error) => {
                console.log(error);
            })
        },
        mounted(){
            axios.get('http://localhost/51%20php-ajax-dischi/php-ajax-dischi/data/controller.php?genre=' + this.genre)
            .then((result) => {
                this.disksList = result.data.results;
            })
            .catch((error) => {
                console.log(error);
            })
        }
    }
)