<template>
    <main class="text-center">
        <div class="ax-film-wrapper">
            <h1>titolo</h1>
            <h2>titolo originale</h2>
            <h3>lingua</h3>
            <h4>voto</h4>
        </div>
        

    </main>
</template>

<script>
import axios from 'axios';

export default {
    name: 'IndexMainContainer',
    data: function (){
        return{

        }
    },
    methods:{

    },
    computed:{

    },
    created: function(){
        axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro')
            .then((result) =>{
                console.log(result.data.results)
            })
            .catch((error) =>{
                console.warn(error)
            });
    }
}
</script>

<style lang='scss' scoped>

</style>