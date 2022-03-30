<template>
    <main class="p-5">
        <div class="container-fluid p-5">
            <div class="row p-5">
                <div class="col-12 p-5">
                    <div class="cards-container text-white p-5 d-flex flex-wrap">
                        <MusicCard />
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
    created: function(){
        this.getAPI();
    },
    methods: {
        getAPI: function (){
            axios
            .get('https://flynn.boolean.careers/exercises/api/array/music')
            .then((result) =>{
                console.log(result)
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