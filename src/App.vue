<template>
  <div id="app">

    <Header @newMoviesSearch="newSearch" />
    
    <Main :searchParameters='stringToSearch' />

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
      stringToSearch:'',
    }
  },
  methods:{
    newSearch(string){
      console.warn(string)
      this.stringToSearch = string;
      console.error(this.stringToSearch)
    }
  }
}
</script>

<style lang="scss">
@import './assets/styles/style.scss';

</style>
