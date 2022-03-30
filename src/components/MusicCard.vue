<template>
    <div class="ax-card p-4 mb-3 d-flex flex-column justify-content-start align-items-center text-center">
        <div class="ax-img-wrapper w-100 mb-4">
            <img :src="album.poster" class="img-fluid" alt="">
        </div>
        <h4 class="text-uppercase fw-bold m-0 mb-4">{{ album.title }}</h4>
        <div>
            <p class="m-0">{{ album.author }}</p>
            <p>{{ album.year }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SingleCard',
    props: ['album']
}
</script>

<style lang='scss' scoped>
@import '../style/main-style.scss';
div.ax-card{
    width: calc(100% / 5 - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    background-color: $productMainColor;

    p{
        color: rgba(255, 255, 255, 0.5);
    }
}

</style>