<template>
  <div id="app">

    <Header @newMoviesSearch="newSearch" />
    
    <Main />

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
  data: function (){
    return{

    }
  },
  methods:{
    newSearch(string){
      console.warn(string)
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

</style>
