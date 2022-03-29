<template>
    <div id='index-header'>
        <div class="img-wrapper">
        <img src="../assets/img/dc-logo.png" alt="DC comics logo">
        </div>
        <nav>
            <ul>
                <li v-for="(element, index) in navItems" :key="index" :class="{'active' : element.active}" @click="linkSelection(index , navItems)">
                    <a href="#">{{ element.text }}</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ProjectHeader',
    data: function(){
        return{
            navItems:[
                {
                    text : 'characters',
                    active: false
                },
                {
                    text : 'comics',
                    active: true
                },
                {
                    text : 'movies',
                    active: false
                },
                {
                    text : 'tv',
                    active: false
                },
                {
                    text : 'games',
                    active: false
                },
                {
                    text : 'collectibles',
                    active: false
                },
                {
                    text : 'videos',
                    active: false
                },
                {
                    text : 'fans',
                    active: false
                },
                {
                    text : 'news',
                    active: false
                },
                {
                    text : 'shop',
                    active: false
                }
            ]
        }
    },
    methods: {
        linkSelection: function (activeIndex , arrayOfObjects){
            arrayOfObjects.forEach((element, index) => {
                if(index === activeIndex){
                    element.active = true
                } else {
                    element.active = false
                }
            });
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

    div#index-header{
        width: 80%;
        height: 15vh;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .img-wrapper{
            height: 100%;
            padding: .5rem;
            img{
                height: 100%;
            }
        }
        ul{
            list-style-type: none;
            li{
            text-transform: uppercase;
            display: inline-block;
            padding: 0 0.5rem;
            line-height: calc(15vh - 4px);
            text-align: center;
            border-bottom: 4px solid transparent;
            &.active{
                color: $productMainColor;
                border-bottom: 4px solid $productMainColor;    
            }
                a{
                text-decoration: none;
                color: black;
                }
            }
        }
        
    }
</style>