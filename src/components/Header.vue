<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-danger text-uppercase">boolflix</h1>
        <nav>
            <div class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model='stringToSearch'>
                <button class="btn btn-outline-success" @click="$emit('newMoviesSearch', stringToSearch)">Search</button>
            </div>
            <select class="form-select" aria-label="Default select example">
                <option selected value='eng'>EN</option>
                <option value="ita">IT</option>
            </select>
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

    }
}
</script>

<style lang='scss' scoped>
header{
    background-color: rgb(65, 28, 100);
}

</style>