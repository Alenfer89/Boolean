<template>
  <div id="app">

    <Header 
    @stringSearchByUserInput="newSearchAPICall"
    @newSearchStarted="userIsSearching" />
    
    <Main
    class="py-3"
    :userSearchMoviesList = 'moviesList'
    :userSearchTvShowsList= 'tvShowsList'
    :isUserSearching= 'isUserSearching'
    :basicOfferMovies='basicMoviesList'
    :basicOfferTv='basicTvShowsList'
    />
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
      basicMoviesList: [],
      tvShowsList: [],
      basicTvShowsList: [],
      isUserSearching: false,
    }
  },
  methods:{
    newSearchAPICall(string){
      //movies
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=${string}`)
      .then((result) =>{
      //console.warn(result.data.results)
      return this.moviesList = result.data.results;
      })
      .catch((error) =>{
          console.warn(error)
      });
      //tvshows
      axios
      .get(`https://api.themoviedb.org/3/search/tv?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=${string}`)
      .then((result) =>{
      //console.error(result.data.results)
      return this.tvShowsList = result.data.results;
      })
      .catch((error) =>{
          console.warn(error)
      });
    },
    userIsSearching(boolean){
      console.log(boolean)
      this.isUserSearching = boolean;
    }
  },
  mounted(){
      axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=lord+of+the`)
      .then((result) =>{
      console.warn(result.data.results)
      return this.basicMoviesList = result.data.results;
      })
      .catch((error) =>{
          console.warn(error)
      });
      axios
      .get(`https://api.themoviedb.org/3/search/tv?api_key=1f44e6c8774af333d13f09b5e0b33019&language=it-IT&query=lol`)
      .then((result) =>{
      console.error(result.data.results)
      return this.basicTvShowsList = result.data.results;
      })
      .catch((error) =>{
          console.warn(error)
      });
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';
#app{
  color: white;
  
}
</style>
