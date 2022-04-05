<template>
    <main class="text-center">
        <section id="overview">
            <ProductOffers
            v-if='!isUserSearching'
            :basicOfferMovies='basicOfferMovies'
            :basicOfferTv='basicOfferTv'
            />
        </section>
        <section id="by-user-request" v-if='isUserSearching'>
            <div class="container-fluid">
                <div class="row" v-if='userSearchMoviesList.length == 0 && userSearchTvShowsList.length == 0'>
                    <div class="col-12">
                        <h3 class="text-uppercase fw-bold">sorry! there are no results for your entry</h3>
                    </div>
                </div>
                <div class="row" v-if='userSearchMoviesList.length > 0'>
                    <div class="col-12">
                        <h3 class="text-uppercase fw-bold">movies based on your research</h3>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 flex-wrap px-3 px-sm-4 px-lg-5" v-if='userSearchMoviesList.length > 0'>
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
                <div class="row" v-if='userSearchTvShowsList.length > 0'>
                    <div class="col-12">
                        <h3 class="text-uppercase fw-bold">tv series based on your research</h3>
                    </div>
                </div>
                <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 flex-wrap px-3 px-sm-4 px-lg-5" v-if='userSearchTvShowsList.length > 0'>
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
        </section>
    </main>
</template>

<script>
import Card from './ProductCard.vue';
import ProductOffers from './ProductOffers.vue'

export default {
    name: 'IndexMainContainer',
    components: {
        Card,
        ProductOffers
    },
    props:{
        userSearchMoviesList: Array,
        userSearchTvShowsList: Array,
        isUserSearching: Boolean,
        basicOfferMovies: Array,
        basicOfferTv: Array
    }
}
</script>

<style lang='scss' scoped>
main{
    background-color: rgb(40, 34, 34);
    min-height: 90vh;
    //div.row > div.ax-product-card{
        //padding-left: 0px;
        //padding-right: 0px;
        //margin-right: auto;
    //}
}
</style>