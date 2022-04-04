<template>
    <div class="ax-product-card">
        <img :src="posterGenerator(productPoster)" :alt="`original poster of `+productTitle" class="img-fluid" >
        <p class="bg-primary"> {{ productTitle }} </p>
        <!-- <p class="bg-black text-white"> {{ movieName }} </p> -->
        <p class="bg-success"> {{ productUrTitle }} </p>
        <p class="bg-danger"> {{ productVote }} </p>
        <img :src="flagGenerator(productLang)" :alt="productLang" class="ax-flags">
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
            //flagPlaceholder: `https://ak.picdn.net/shutterstock/videos/1012757690/thumb/1.jpg`,
        }
    },
    methods: {
        flagGenerator(string){
            if(string.toLowerCase() == 'en'){
                string = 'gb'
            }
            const flagUrl = findFlagUrlByIso2Code(string.toUpperCase())
            //console.log(findFlagUrlByIso2Code(string.toUpperCase()))
            if(flagUrl === ''){
                return 'https://ak.picdn.net/shutterstock/videos/1012757690/thumb/1.jpg'
            } 
            return flagUrl
        },
        posterGenerator(string){
            const dbUrl = 'https://image.tmdb.org/t/p/';
            const posterSize = 'original';
            const posterString = string;
            const finalPoster = dbUrl+posterSize+posterString;
            console.log(finalPoster)
            return finalPoster;
        }
    }
}
</script>

<style lang='scss' scoped>

div.ax-product-card{
    width: calc(100% / 8);

    img.ax-flags{
        height: 20px;
        width: 30px;
    }
}
</style>