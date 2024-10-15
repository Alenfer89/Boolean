<template>
    <nav>
        <div class="single-main-link" v-for='(element, index) in navLinks' :key='index'>
            <div class="img-wrapper">
                <img :src="require(`../assets/img/${element.img}`)" :alt="element.text">
            </div>
            <h5><a :href="element.url"> {{ element.text }} </a></h5>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavLinks",
    data: function(){
        return{
            navLinks: [
                {
                    img:'buy-comics-digital-comics.png',
                    text: 'digital comics',
                    url:'#'
                },
                {
                    img:'buy-comics-merchandise.png',
                    text: 'dc merchandise',
                    url:'#'
                },
                {
                    img:'buy-comics-subscriptions.png',
                    text: 'subscriptions',
                    url:'#'
                },
                {
                    img:'buy-comics-shop-locator.png',
                    text: 'comic shop locator',
                    url:'#'
                },
                {
                    img:'buy-dc-power-visa.svg',
                    text: 'dc power visa',
                    url:'#'
                }
            ]
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

    nav{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;

        div.single-main-link{
            width: calc(100% / 5);
            padding: 2rem;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            .img-wrapper{
                width: 25%;
                padding: .4rem;
                img{
                    width: 100%;
                    margin-right: 0.5rem;
                }
            }
            a{
                text-decoration: none;
                color: white;
                text-transform: uppercase;
            }
        }
    }
</style>