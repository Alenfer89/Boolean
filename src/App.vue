<template>
  <div id="app">

    <Header @stringSearchByUserInput="newSearchAPICall" />
    
    <Main :userMoviesListSearch = 'moviesList'/>

  </div>
</template>

<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import axios from 'axios';



export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data: function (){
    return{
      moviesList: [],
    }
  },
  methods:{
    newSearchAPICall(string){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=${string}`)
      .then((result) =>{
      console.log(result.data.results)
      return this.moviesList = result.data.results;
      })
      .catch((error) =>{
          console.warn(error)
      });
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

</style>
