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
                <div>
                    <button>SIGN-UP NOW</button>
                </div>
                <div class="socials-container">
                    <div>FOLLOW US</div>
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
        div.bop-footer-container{
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
                    color: white;
                    padding: 0.8rem;
                    border: 2px solid $productMainColor;
                }
                div.socials-container{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    img{
                        margin: 0 1rem;
                    }
                }
            }
        }
    }
    
</style>