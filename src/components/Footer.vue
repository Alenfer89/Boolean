<template>
    <div id="index-footer">

        <div class="top-footer-container">
            <div class="top-footer">
                <div class="lists-wrapper">
                    <h4>TITLE</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                    <h4>TITLE</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </div>
                <div class="lists-wrapper">
                    <h4>TITLE</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </div>
                <div class="lists-wrapper">
                    <h4>TITLE</h4>
                    <ul>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                        <li>ITEM</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="bop-footer-container">
            <div class="bot-footer">

            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProjectFooter',
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

    div#index-footer{
        color: rgba(255, 255, 255, 0.5);
        div.top-footer-container{
        background-image: url('../assets/img/footer-bg.jpg');
            div.top-footer{
                width: 80%;
                margin: 0 auto;
                padding: 2rem 0;
                display: flex;
                position: relative;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: start;
                div.lists-wrapper{
                    margin-right: 1.6rem;
                }
                h4{
                    color: white;
                }
                ul{
                    margin: 0.8rem 0;
                    list-style-type: none;
                    li{
                        font-size: .7rem;
                    }
                }
            }
        }
    }
    
</style>