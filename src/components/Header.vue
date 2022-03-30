<template>
    <header>
        <div class="img-wrapper p-2 ms-3">
            <a href="https://www.spotify.com/it/">
                <img src="../assets/img/Spotify.png" alt="Spotify Logo">
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'IndexHeader'
}
</script>

<style lang='scss' scoped>
@import '../style/main-style.scss';

header{
    background-color: $productMainColor;
    height: 10vh;
    .img-wrapper{
        height: 10vh;
        img{
            height: 100%;
        }
    }
}

</style>