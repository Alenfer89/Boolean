<template>
    <header>
        <div class="img-wrapper p-3 ms-3">
            <a href="https://www.spotify.com/it/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/71/Spotify.png" alt="Spotify Logo" class="img-fluid">
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
header{
    background-color: rgb(46, 58, 70);

    .img-wrapper{
        width: 100px;
    }
}

</style>