<template>
  <div id="app">
    <Header/>
    <main>
      <MainSection/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import MainSection from './components/MainSection.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    MainSection,
    Footer
  }
}
</script>

<style lang="scss">
@import './assets/scss/style.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}
</style>
