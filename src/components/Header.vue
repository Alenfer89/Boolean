<template>
    <header class="d-flex justify-content-between align-items-center">
        <div class="img-wrapper p-2 ms-3">
            <a href="https://www.spotify.com/it/">
                <img src="../assets/img/Spotify.png" alt="Spotify Logo">
            </a>
        </div>
        <div>
            <select class="form-select" @click='genreSelector()'>
                <option selected value='null'>Select By Genre</option>
                <option v-for='(element, index) in musicGenre' :key='index' :value="element.id" @click='genreSelector(element)'>
                    {{ element.genre }}
                </option>
            </select>
        </div>
    </header>
</template>

<script>
export default {
    name: 'IndexHeader',
    data: function(){
        return{
            musicGenre: [
                {
                    id: 1,
                    genre: 'Rock'
                },
                {
                    id: 2,
                    genre: 'Metal'
                },
                {
                    id: 3,
                    genre: 'Jazz'
                },
                {
                    id: 4,
                    genre: 'Pop'
                }
            ],
            genreCheck: null,
            message: '',
        }
    },
    methods:{
        genreSelector(objectElement){
            console.log(this.genreCheck);
            this.genreCheck = objectElement.genre;
            console.log(this.genreCheck);
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../style/main-style.scss';

header{
    background-color: $productMainColor;
    height: 10vh;
    .img-wrapper{
        height: 10vh;
        img{
            height: 100%;
        }
    }
    select.form-select{
        background-color: $productSecondaryColor;
        color: white;
    }
}

</style>