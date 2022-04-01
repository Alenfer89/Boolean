<template>
    <div class="ax-movie-card">
        <h1> {{ movieTitle }} </h1>
        <h2> {{ movieUrTitle }} </h2>
        <h3> {{ movieVote }} </h3>
        <h4> {{ movieLang }} </h4>
    </div>
</template>

<script>
export default {
    name: 'singleMovieCard',
    props:{
        movieTitle : String,
        movieUrTitle: String,
        movieVote: Number,
        movieLang: String,
    }
}
</script>

<style lang='scss' scoped>

</style>