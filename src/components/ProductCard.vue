<template>
    <div class="ax-product-card col position-relative mb-4"
    
    >
        
        <img :src="posterGenerator(productPoster)" :alt="`original poster of `+productTitle" class="rounded" @mouseover="hoverEffectChager()">
        
        <div class="ax-card-text-wrapper p-2 d-flex flex-column justify-content-start align-items-center position-absolute" v-if='this.hoverEffect === true' @mouseleave="hoverEffectChager()">
            <p class="bg-primary"> {{ productTitle }} </p>
            <p class="bg-success"> {{ productUrTitle }} </p>
            <p class="bg-danger"> {{ productVote }} </p>
            <img :src="flagGenerator(productLang)" :alt="productLang" class="ax-flags">
            <p> {{voteConversion(productVote)}} </p>
            <div>
                <font-awesome-icon icon="fa-solid fa-star"
                    v-for='(element, index) in voteConversion(productVote)'
                    :key='index + "fullStar"'
                />
                <font-awesome-icon icon="fa-regular fa-star"
                    v-for='(element, index) in (5-voteConversion(productVote))'
                    :key='index + "emptyStar"'
                />
            </div>
        </div>
    </div>
</template>

<script>
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default {
    name: 'singleProductCard',
    props:{
        productTitle : String,
        productUrTitle: String,
        productVote: Number,
        productLang: String,
        productPoster: String
    },
    data: function(){
        return{
            hoverEffect: false,
        }
    },
    methods: {
        flagGenerator(string){
            if(string.toLowerCase() == 'en'){
                string = 'gb'
            } else if (string.toLowerCase() == 'ja'){
                string = 'jp'
            }
            const flagUrl = findFlagUrlByIso2Code(string.toUpperCase())
            if(flagUrl === ''){
                return 'https://ak.picdn.net/shutterstock/videos/1012757690/thumb/1.jpg'
            } 
            return flagUrl
        },
        posterGenerator(string){
            const dbUrl = 'https://image.tmdb.org/t/p/';
            const posterSize = 'w342';
            const posterString = string;
            const finalPoster = dbUrl+posterSize+posterString;
            if(posterString==null) return 'https://i0.wp.com/capri.org.au/wp-content/uploads/2017/10/poster-placeholder.jpg?ssl=1';
            return finalPoster;
        },
        voteConversion(number){
            return Math.ceil(number / 2)
        },
        hoverEffectChager(){
            console.log(this.hoverEffect)
            this.hoverEffect = !this.hoverEffect;
            console.log(this.hoverEffect)
        }
    }
}
</script>

<style lang='scss' scoped>

div.ax-product-card{
    min-height: 300px;
    //border: 2px solid rgb(40, 34, 34);
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.747);
    }
    img.ax-flags{
        height: 20px;
        width: 30px;
    }
    div.ax-card-text-wrapper{
        //width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgba(0, 0, 0, 0.69);

        svg{
            color: rgb(255, 174, 0);
        }
    }
}
</style>