<template>
    <main>
        <div class="ax-loading-placeholder d-flex align-items-center justify-content-center" v-if='albumList.length == 0'>
            <div class="ax-animation">
                <h1>
                LOADING . . .
                </h1>
            </div>
        </div>
        <div class="container-fluid px-5" v-else>
            <div class="row px-5">
                <div class="col-12 px-5">
                    <div class="ax-cards-container text-white p-5 d-flex flex-wrap">
                        <MusicCard 
                        v-for='(element, index) in albumsToShow(genreString)'
                        :key="index"
                        :album='element'
                        />
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from "axios";
import MusicCard from '@/components/MusicCard.vue';

export default {
    name: 'IndexMain',
    components: {
        MusicCard
    },
    props: {
        'genreString': String
    },
    data: function(){
        return{
            albumList:[],
        }
    },
    created: function(){
        //this.getAPI();
        setTimeout(this.getAPI, 3000)
    },
    methods: {
        getAPI: function (){
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) =>{
                //console.log(result.data.response);
                //console.log(this.albumList);
                this.albumList = result.data.response;
                //console.log(this.albumList);
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        albumsToShow(genreString){
            if(genreString !== null){
                console.warn(genreString)
                console.warn(this.albumList)
                return this.albumList.filter((element)=> element.genre.toLowerCase().includes(genreString.toLowerCase()))
            } else if (genreString == null){
                console.warn(genreString)
                console.warn(this.albumList)
                return this.albumList;
            }
            
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../style/main-style.scss';

main{
background-color: $productSecondaryColor;
min-height: 90vh;
    div.ax-loading-placeholder{
    height: 90vh;
        div.ax-animation{
        width: 500px;
        height: 500px;
        border-radius: 50%;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        animation-duration: 2s;
        animation-name: spinneroo;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        position: relative;
            h1{
            color: rgba(255, 255, 255, 1);
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% , -50%);
            }
        }
        @keyframes spinneroo {
            0%{
                transform: rotate(0deg);
            }
            25%{
                transform: rotate(90deg);
            }
            50%{
                transform: rotate(180deg);
            }
            75%{
                transform: rotate(270deg);
            }
            100%{
                transform: rotate(360deg);
            }
        }
    }
}

</style>