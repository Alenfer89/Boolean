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
/* buttons hover effects */
.btn{
    transition: transform 0.3s;
}
.btn:hover{
    transform: scale(1.05);
}
.btn.bg-danger:hover{
    outline-offset: 3px;
    outline: 3px solid rgb(220, 53, 69);
}
.btn.btn-primary:hover{
    outline-offset: 3px;
    outline: 3px solid rgb(11, 94, 215);
}
.btn.bg-dark:hover{
    outline-offset: 3px;
    outline: 3px solid rgb(33, 37, 41);
}
section#play-plus a.btn:hover{
    outline-offset: 3px;
    outline: 3px solid rgba(255, 255, 255, 0.5);
}
.btn.bg-white:hover{
    outline-offset: 3px;
    outline: 3px solid white;
}
/* jumbotron section */
section#jumbotron{
    margin-top: 6.4rem;
}
section#jumbotron .my-top-jumbo{
    background-image: url(../assets/img/jumbo-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
section#jumbotron .my-top-jumbo .container-fluid{
    z-index: 2;
}
section#jumbotron div.my-bot-jumbo img{
    border-radius: 1rem;
    bottom: 0;
    transition: 0.5s;
}
section#jumbotron div.my-bot-jumbo img:hover{
    border-color: #0d6efd !important;
    bottom: 20px;
}
</style>
