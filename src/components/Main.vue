<template>
    <main class="text-center">
        <div class="ax-cards-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <Card
            v-for='(movie, index) in userSearchMoviesList'
            :key='index'
            :productTitle='movie.title'
            :productUrTitle='movie["original_title"]'
            :productVote='movie["vote_average"]'
            :productLang='movie["original_language"]'
            />
        </div>
        <div class="ax-cards-wrapper d-flex flex-wrap justify-content-between align-items-center">
            <Card
            v-for='(show, index) in userSearchTvShowsList'
            :key='index'
            :productTitle='show.name'
            :productUrTitle='show["original_name"]'
            :productVote='show["vote_average"]'
            :productLang='show["original_language"]'
            />
        </div>
    </main>
</template>

<script>
import Card from './ProductCard.vue'

export default {
    name: 'IndexMainContainer',
    components: {
        Card,
    },
    props:{
        userSearchMoviesList: Array,
        userSearchTvShowsList: Array
    }
}
</script>

<style lang='scss' scoped>

</style>