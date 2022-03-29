<template>
    <div class="comic-card">
        <img :src="details['thumb']" :alt="details['series']">
        <h3>{{ details['series'] }}</h3>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['details']
}
</script>

<style lang='scss' scoped>
div.comic-card{
    width: calc(100% / 6);

    img{
        width: 100%;
    }
    h3{
        text-transform: uppercase;
    }
}
</style>