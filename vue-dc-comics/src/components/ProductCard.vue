<template>
    <div class="comic-card">
        <div class="img-thumb-container">
            <img :src="comicDetails['thumb']" :alt="comicDetails['series']">
        </div>
        <h5>{{ comicDetails['series'] }}</h5>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['comicDetails']
}
</script>

<style lang='scss' scoped>

div.comic-card{
    width: calc(100% / 6);
    padding: .5rem;

    div.img-thumb-container{
        width: 200px;
        height: 200px;
        margin-bottom: 1rem;
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: left top;
    }
    h5{
        text-transform: uppercase;
    }
}
</style>