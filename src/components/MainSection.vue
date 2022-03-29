<template>
    <div id="index-main">
        <div id="product-container">
            <div id="jumbotron">
                
            </div>
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

        div#product-container{

            div#jumbotron{
                height: 50vh;
                width: 100%;
                background-image: url('../assets/img/jumbotron.jpg');
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
        div#products-links{
        background-color: $productMainColor;
        padding: 3rem;
        }
    }
</style>