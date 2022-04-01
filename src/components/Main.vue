<template>
    <main class="text-center">
        <div class="ax-movies-wrapper">
            <Movie
            v-for='(element, index) in moviesList'
            :key='index'
            :movie='element' />
        </div>
    </main>
</template>

<script>
import axios from 'axios';
import Movie from './Movie.vue'

export default {
    name: 'IndexMainContainer',
    components: {
        Movie,
    },
    data: function (){
        return{
            moviesList:[],
        }
    },
    methods:{

    },
    computed:{

    },
    created: function(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro')
            .then((result) =>{
                console.log(result.data.results)
                this.moviesList = result.data.results;
            })
            .catch((error) =>{
                console.warn(error)
            });
    }
}
</script>

<style lang='scss' scoped>

</style>