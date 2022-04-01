<template>
    <header class="d-flex justify-content-between align-items-center p-4">
        <h1 class="text-danger text-uppercase">boolflix</h1>
        <nav>
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'IndexHeader',
}
</script>

<style lang='scss' scoped>

</style>