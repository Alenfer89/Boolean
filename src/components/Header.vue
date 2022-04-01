<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-danger text-uppercase">boolflix</h1>
        <nav>
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model='stringToSearch'>
                <button class="btn btn-outline-success" @click="newSearchStartingPoint(stringToSearch)">Search</button>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected value='eng'>EN</option>
                <option value="ita">IT</option>
            </select>
        </nav>
    </header>
</template>

<script>
import axios from 'axios';

export default {
    name: 'IndexHeader',
    data: function (){
        return{
            stringToSearch: '',
        }
    },
    methods: {
        newSearchStartingPoint(stringToSearch){
            axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=${stringToSearch}`)
            .then((result) =>{
                console.log(result.data.results)
                //this.moviesList = result.data.results;
            })
            .catch((error) =>{
                console.warn(error)
            });
            this.$emit('newMoviesSearch', stringToSearch)
        }
    }
}
</script>

<style lang='scss' scoped>
header{
    background-color: rgb(65, 28, 100);
}

</style>