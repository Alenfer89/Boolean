<template>
    <div id="index-main">
        <div id="product-container">
            <h2> CONTENT GOES HERE </h2>
        </div>
        <div id="products-links">

        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectMain',
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';
    div#index-main{
        width: 80%;
        margin: 0 auto;

        div#product-container{
        background-color: rgb(28, 28, 28);
        color: white;
        padding: 3rem;
        }
        div#products-links{
        background-color: $productMainColor;
        padding: 3rem;
        }
    }
</style>