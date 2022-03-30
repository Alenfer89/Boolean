<template>
    <main>
        <div class="container-fluid px-5">
            <div class="row px-5">
                <div class="col-12 px-5">
                    <div class="ax-cards-container text-white p-5 d-flex flex-wrap">
                        <MusicCard 
                        v-for='(element, index) in albumList'
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
                console.log(result.data.response);
                console.log(this.albumList);
                this.albumList = result.data.response;
                console.log(this.albumList);
            })
            .catch((error) =>{
                console.log(error)
            })
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../style/main-style.scss';

main{
    background-color: $productSecondaryColor;
    
}

</style>