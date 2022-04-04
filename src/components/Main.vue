<template>
    <main class="text-center">
        <section id="overview"></section>
        <section id="by-user-request">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-uppercase fw-bold">Film in base alla tua ricerca</h3>
                    </div>
                    <div class="col-12 ax-cards-wrapper d-flex flex-wrap justify-content-start align-items-center">
                        <Card
                        v-for='(movie, index) in userSearchMoviesList'
                        :key='index'
                        :productTitle='movie.title'
                        :productUrTitle='movie["original_title"]'
                        :productVote='movie["vote_average"]'
                        :productLang='movie["original_language"]'
                        :productPoster='movie["poster_path"]'
                        />
                    </div>
                </div>
            </div>
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <h3 class="text-uppercase fw-bold">Serie TV in base alla tua ricerca</h3>
                    </div>
                    <div class="col-12 ax-cards-wrapper d-flex flex-wrap justify-content-between align-items-center">
                        <Card
                            v-for='(show, index) in userSearchTvShowsList'
                            :key='index'
                            :productTitle='show.name'
                            :productUrTitle='show["original_name"]'
                            :productVote='show["vote_average"]'
                            :productLang='show["original_language"]'
                            :productPoster='show["poster_path"]'
                            />
                    </div>
                </div>
            </div>
            
        </section>
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
main{
    background-color: rgb(54, 0, 2);
}
</style>