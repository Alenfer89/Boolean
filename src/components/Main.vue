<template>
    <main class="text-center">
        <div class="ax-movies-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <Movie
            v-for='(movie, index) in userSearchMoviesList'
            :key='index'
            :movieTitle='movie.title'
            :movieName='movie.name'
            :movieUrTitle='movie["original_title"] ||movie["original_name"]'
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
        userSearchMoviesList: Array,
        userSearchTvShowsList: Array
    }
}
</script>

<style lang='scss' scoped>

</style>