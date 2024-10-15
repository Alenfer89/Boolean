<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-uppercase fw-bold text-danger" 
        @click="$emit('newSearchStarted', hasSearchStarted)">
            boolflix
        </h1>
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
            hasSearchStarted: false
        }
    },
    methods: {
        stringTitleSearch(string){
            this.hasSearchStarted = true;
            this.$emit('newSearchStarted', this.hasSearchStarted)
            this.$emit('stringSearchByUserInput', string)
            this.stringToSearch = '';
            this.hasSearchStarted = false;
        }
    }
}
</script>

<style lang='scss' scoped>
header{
    background-color: rgb(18, 14, 14);
    height: 10vh;
    h1{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
    nav{
        input.form-control:focus{
            box-shadow: 0 0 0 0.25rem rgba(253, 13, 13, 0.25);
        }
    }
}

</style>