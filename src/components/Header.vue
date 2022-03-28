<template>
    <div id='index-header'>
        <div class="img-wrapper">
        <img src="../assets/img/dc-logo.png" alt="DC comics logo">
        </div>
        <nav>
            <ul>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li class="active">
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
                <li>
                    <a href="#">ITEM</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'ProjectHeader',
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

    div#index-header{
        width: 80%;
        height: 15vh;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .img-wrapper{
            height: 100%;
            padding: .5rem;
            img{
                height: 100%;
            }
        }
        ul{
            list-style-type: none;
            li{
            display: inline-block;
            padding: 0 0.5rem;
            line-height: calc(15vh - 4px);
            text-align: center;
            border-bottom: 4px solid transparent;
            &.active{
                color: $productMainColor;
                border-bottom: 4px solid $productMainColor;    
            }
                a{
                text-decoration: none;
                color: black;
                }
            }
        }
        
    }
</style>