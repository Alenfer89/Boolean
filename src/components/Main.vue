<template>
    <main class="text-center">
        <div class="ax-movies-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <Movie
            v-for='(movie, index) in userMoviesListSearch'
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
import Movie from './Movie.vue'

export default {
    name: 'IndexMainContainer',
    components: {
        Movie,
    },
    props:{
        userMoviesListSearch: Array,
    },
    data: function (){
        return{
        }
    },
    methods:{

    }
}
</script>

<style lang='scss' scoped>

</style>