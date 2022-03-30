<template>
    <div class="ax-card p-4 mb-2 mx-3 d-flex flex-column justify-content-start align-items-center text-center">
        <div class="ax-img-wrapper w-100">
            <img :src="album.poster" class="img-fluid mb-2" alt="">
        </div>
        <h3 class="text-uppercase fw-bold m-0">{{ album.title }}</h3>
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
    width: calc(100% / 5);
    height: 420px;
    background-color: $productMainColor;

    p{
        color: rgba(255, 255, 255, 0.5);
    }
}

</style>