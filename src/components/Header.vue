<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-danger text-uppercase">boolflix</h1>
        <nav>
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model='stringToSearch'>
                <button class="btn btn-outline-success" @click="stringTitleSearch(stringToSearch)">Search</button>
            </div>
        </nav>
    </header>
</template>

<script>


export default {
    name: 'IndexHeader',
    data: function (){
        return{
            stringToSearch: '',
        }
    },
    methods: {
        stringTitleSearch(string){
            this.$emit('stringSearchByUserInput', string)
        }
    }
}
</script>

<style lang='scss' scoped>
header{
    background-color: rgb(65, 28, 100);
}

</style>