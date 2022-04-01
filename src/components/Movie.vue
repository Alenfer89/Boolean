<template>
    <div class="ax-movie-card">
        <p> {{ movieTitle }} </p>
        <p> {{ movieUrTitle }} </p>
        <p> {{ movieVote }} </p>
        <p> {{ movieLang }} </p>
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

div.ax-movie-card{
    width: calc(100% / 8);
}
</style>