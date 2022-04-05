<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-danger text-uppercase fw-bold">boolflix</h1>
        <nav>
            <div class="d-flex">
                <input class="form-control me-3" type="search" placeholder="Start a new research" aria-label="Search" v-model='stringToSearch' @keyup.enter="stringTitleSearch(stringToSearch)">
                <button class="btn btn-outline-danger"
                @click="stringTitleSearch(stringToSearch)">
                    Search
                </button>
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
            this.stringToSearch = '';
        }
    }
}
</script>

<style lang='scss' scoped>
header{
    background-color: rgb(18, 14, 14);
    height: 10vh;
    nav{
        input.form-control:focus{
            box-shadow: 0 0 0 0.25rem rgba(253, 13, 13, 0.25);
        }
    }
}

</style>