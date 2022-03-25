<template>
  <div class="hello">
    <p>{{message}}</p>
    <section id="jumbotron">
            <div class="my-top-jumbo position-relative px-sm-4 py-5">
                <div class="my-read-helper d-lg-none">
                    <!--* this is a div overlay-like in position absolute to help reading on light imgs -->
                </div>
                <div class="container-fluid position-relative">
                    <div class="row align-items-end text-white pt-5 mt-5">
                        <div class="col-12 col-lg-4 pt-5 mt-5">
                            <img class="w-50 py-3" src="../assets/img/returnal-hero-banner-logo.png" alt="Returnal Game Logo">
                            <h1 class="py-3">Rompi il cerchio</h1>
                            <p class="py-3">Rialzati dopo ogni sconfitta e affronta una nuova sfida con ogni rinascita in questo esplosivo thriller fantascientifico, disponibile in esclusiva su PS5</p>
                            <a href="#" class="btn rounded-pill text-white bg-danger">Aquista Ora</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-bot-jumbo px-sm-4 py-5 bg-white">
                <div class="container-fluid">
                    <div class="row gy-4">
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-primary position-relative my-scale" src="../assets/img/returnal-listing-thumb-01-ps5.jpg" alt="Returnal Game Cover">
                            </a>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-white position-relative my-scale" src="../assets/img/ratchet-and-clank-rift-apart-keyart.jpg" alt="Ratchet Game Cover">
                            </a>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-white position-relative my-scale" src="../assets/img/returnal-listing-thumb-01-ps5.jpg" alt="Returnal Game Cover">
                            </a>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-white position-relative my-scale" src="../assets/img/ratchet-and-clank-rift-apart-keyart.jpg" alt="Ratchet Game Cover">
                            </a>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-white position-relative my-scale" src="../assets/img/returnal-listing-thumb-01-ps5.jpg" alt="Returnal Game Cover">
                            </a>
                        </div>
                        <div class="col-6 col-sm-4 col-lg-2">
                            <a class="" href="#">
                                <img class="img-fluid img-thumbnail border-2 border-white position-relative my-scale" src="../assets/img/ratchet-and-clank-rift-apart-keyart.jpg" alt="Ratchet Game Cover">
                            </a>
                        </div>
                    </div>               
                </div>
            </div>
        </section>
  </div>
</template>

<script>
export default {
  name: "MyHero",
  data() {
    return {
      message: 'questo è un jumbotron fidati',
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
