<template>
    <main>
        <h1>MAIN</h1>
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
                console.log(result)
            })
            .catch((error) =>{
                console.warn(error)
            });
    }
}
</script>

<style lang='scss' scoped>

</style>