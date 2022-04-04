<template>
    <div class="ax-product-card">
        <p class="bg-primary"> {{ productTitle }} </p>
        <!-- <p class="bg-black text-white"> {{ movieName }} </p> -->
        <p class="bg-success"> {{ productUrTitle }} </p>
        <p class="bg-danger"> {{ productVote }} </p>
        <img :src="flagGenerator(productLang)" :alt="productLang">
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
        }
    }
}
</script>

<style lang='scss' scoped>

div.ax-product-card{
    width: calc(100% / 8);

    img{
        height: 20px;
        width: 30px;
    }
}
</style>