<template>
    <div id="index-footer">

        <div class="top-footer-container">
            <div class="top-footer">
                <div class="lists-container">
                    <div class="list-wrapper">
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
                    <div class="list-wrapper">
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
                    <div class="list-wrapper">
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
                
                <div id="logo-background">
                </div>
            </div>
        </div>

        <div class="bot-footer-container">
            <div class="bot-footer">
                <div>
                    <button>SIGN-UP NOW!</button>
                </div>
                <div class="socials-container">
                    <h4>FOLLOW US</h4>
                    <div>
                        <img src="../assets/img/footer-facebook.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/img/footer-periscope.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/img/footer-pinterest.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/img/footer-twitter.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/img/footer-youtube.png" alt="">
                    </div>
                    
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProjectFooter',
    data: function() {
        return {
            
        }
    }
}
</script>

<style lang='scss' scoped>
@import '../assets/scss/style.scss';

    div#index-footer{
        color: rgba(255, 255, 255, 0.5);
        div.top-footer-container{
        background-image: url('../assets/img/footer-bg.jpg');
        background-repeat: no-repeat;
        background-size: cover;
            div.top-footer{
                width: 80%;
                margin: 0 auto;
                display: flex;
                flex-direction: row;
                flex-wrap: nowrap;
                justify-content: space-between;
                div.lists-container{    
                    padding: 2rem 0;
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                    justify-content: start;
                }
                div.list-wrapper{
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
                div#logo-background{
                    width: 40%;
                    background-image: url('../assets/img/dc-logo-bg.png');
                    background-position: -50%;
                    background-size: 100%;
                    background-repeat: no-repeat;
                    
                }
            }
        }
        div.bot-footer-container{
            background-color: rgb(48, 48, 48);
            div.bot-footer{
                width: 80%;
                margin: 0 auto;
                padding: 2rem 0;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                button{
                    background-color: transparent;
                    font-weight: 700;
                    color: white;
                    padding: 0.8rem;
                    border: 2px solid $productMainColor;
                }
                h4{
                    color: $productMainColor;
                }
                div.socials-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    img{
                        margin-left: 2rem;
                    }
                }
            }
        }
    }
    
</style>