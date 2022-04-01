<template>
    <div class="ax-movie-card">
        <h1> {{ movie.title }} </h1>
        <h2> {{ movie['original_title'] }} </h2>
        <h3> {{ movie['original_language'] }} </h3>
        <h4> {{ movie['vote_average'] }} </h4>
    </div>
</template>

<script>
export default {
    name: 'singleMovieCard',
    props:['movie']
}
</script>

<style lang='scss' scoped>

</style>