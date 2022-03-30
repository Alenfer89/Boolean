<template>
    <header>
        <div class="img-wrapper p-3 ms-3">
            <a href="https://www.spotify.com/it/">
                <img src="../assets/img/Spotify.png" alt="Spotify Logo" class="img-fluid">
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

    .img-wrapper{
        width: 100px;
    }
}

</style>