<template>
    <div id="index-main">
        <div id="jumbotron">
            <div class="my-container">

            </div>
        </div>
        <div id="product-container">
            <div class="my-container">
                
            </div>
        </div>
        <div id="products-links">
            <div class="my-container">
                
            </div>
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
        div#jumbotron{
        height: 50vh;
        width: 100%;
        background-image: url('../assets/img/jumbotron.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        }
        div#product-container{
        background-color: rgb(28, 28, 28);
        color: white;
        }
        div#products-links{
        background-color: $productMainColor;
        padding: 3rem;
        }
    }
</style>