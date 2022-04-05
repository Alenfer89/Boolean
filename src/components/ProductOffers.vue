<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <h3 class="text-uppercase fw-bold">Most wanted movies</h3>
            </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 flex-wrap px-3 px-sm-4 px-lg-5">
            <Card
                v-for='(movie, index) in basicOfferMovies'
                :key='index'
                :productTitle='movie.title'
                :productUrTitle='movie["original_title"]'
                :productVote='movie["vote_average"]'
                :productLang='movie["original_language"]'
                :productPoster='movie["poster_path"]'
            />
        </div>
        <div class="row">
            <div class="col-12">
                <h3 class="text-uppercase fw-bold">latest tv shows for all the family</h3>
            </div>
        </div>
        <div class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 flex-wrap px-3 px-sm-4 px-lg-5">
            <Card
                v-for='(movie, index) in basicOfferTv'
                :key='index'
                :productTitle='movie.title'
                :productUrTitle='movie["original_title"]'
                :productVote='movie["vote_average"]'
                :productLang='movie["original_language"]'
                :productPoster='movie["poster_path"]'
            />
        </div>
    </div>
</template>

<script>
import Card from './ProductCard.vue';

export default {
    name: 'productOffers',
    components:{
        Card,
    },
    props:{
        basicOfferMovies: Array,
        basicOfferTv: Array
    }
}
</script>

<style lang='scss' scoped>

</style>