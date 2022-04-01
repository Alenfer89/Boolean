<template>
    <main class="text-center">
        <div class="ax-movies-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <Movie
            v-for='(movie, index) in moviesList'
            :key='index'
            :movieTitle='movie.title'
            :movieUrTitle='movie["original_title"]'
            :movieVote='movie["vote_average"]'
            :movieLang='movie["original_language"]'
            />
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
            .get('https://api.themoviedb.org/3/search/movie?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=the+lord')
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