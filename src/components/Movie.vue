<template>
    <div class="ax-movie-card">
        <p> {{ movieTitle }} </p>
        <p> {{ movieUrTitle }} </p>
        <p> {{ movieVote }} </p>
        <img :src="flagGenerator(movieLang)" :alt="movieLang">
    </div>
</template>

<script>
import { findFlagUrlByIso2Code } from "country-flags-svg";

export default {
    name: 'singleMovieCard',
    props:{
        movieTitle : String,
        movieUrTitle: String,
        movieVote: Number,
        movieLang: String,
    },
    methods: {
        flagGenerator(string){
            if(string.toLowerCase() == 'en'){
                string = 'gb'
            }
            const flagUrl = findFlagUrlByIso2Code(string.toUpperCase())
            //console.log(findFlagUrlByIso2Code(string.toUpperCase()))
            if(flagUrl === ''){
                return 'https://it.wikipedia.org/wiki/Bandiera_arcobaleno#/media/File:Gay_Pride_Flag.svg'
            } 
            return flagUrl
        }
    }
}
</script>

<style lang='scss' scoped>

div.ax-movie-card{
    width: calc(100% / 8);

    img{
        height: 20px;
        width: 30px;
    }
}
</style>