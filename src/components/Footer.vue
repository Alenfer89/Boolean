<template>
    <div id="index-footer">

        <div class="top-footer-container">
            <div class="top-footer my-container">
                <div class="lists-container">
                    <div class="list-wrapper">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li v-for='(element, index) in dcComics' :key='index'>
                                <a :href="element.url"> {{ element.link }} </a>
                            </li>
                        </ul>
                        <h4>SHOP</h4>
                        <ul>
                            <li v-for='(element, index) in shop' :key='index'>
                                <a :href="element.url"> {{ element.link }} </a>
                            </li>
                        </ul>
                    </div>
                    <div class="list-wrapper">
                        <h4>DC</h4>
                        <ul>
                            <li v-for='(element, index) in dc' :key='index'>
                                <a :href="element.url"> {{ element.link }} </a>
                            </li>
                        </ul>
                    </div>
                    <div class="list-wrapper">
                        <h4>SITES</h4>
                        <ul>
                            <li v-for='(element, index) in dc' :key='index'>
                                <a :href="element.url"> {{ element.link }} </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div id="logo-background">
                </div>
            </div>
        </div>

        <div class="bot-footer-container">
            <div class="bot-footer my-container">
                <div>
                    <button>SIGN-UP NOW!</button>
                </div>
                <div class="socials-container">
                    <h4>FOLLOW US</h4>
                    <div v-for='(social, index) in socialsLinks' :key='index'>
                        <a :href="social.url"><img :src="require(`../assets/img/${social.img}`)" :alt="social.text"></a>
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
            dcComics: [
                {
                    link: 'Characters',
                    url:'#'
                },
                {
                    link: 'Comics',
                    url:'#'
                },
                {
                    link: 'Movies',
                    url:'#'
                },
                {
                    link: 'TV',
                    url:'#'
                },
                {
                    link: 'Games',
                    url:'#'
                },
                {
                    link: 'Videos',
                    url:'#'
                },
                {
                    link: 'News',
                    url:'#'
                },
            ],
            shop: [
                {
                    link: 'Shop',
                    url:'#'
                },
                {
                    link: 'Shop DC Collectibles',
                    url:'#'
                },
            ],
            dc: [
                {
                    link: 'Terms of use',
                    url:'#'
                },
                {
                    link: 'Privacy of policy (News)',
                    url:'#' 
                },
                {
                    link: 'Ad Choising',
                    url:'#'
                },
                {
                    link: 'Advertising',
                    url:'#'
                },
                {
                    link: 'Jobs',
                    url:'#'
                },
                {
                    link: 'Subscription',
                    url:'#'
                },
                {
                    link: 'Talent Workshop',
                    url:'#'
                },
                {
                    link: 'CPSP Certificates',
                    url:'#'
                },
                {
                    link: 'Rating',
                    url:'#'
                },
                {
                    link: 'Shop Help',
                    url:'#'
                },
                {
                    link: 'Contact us',
                    url:'#'
                },
            ],
            sites: [
                {
                    link: 'DC',
                    url:'#'
                },
                {
                    link: 'MAD',
                    url:'#'
                },
                {
                    link: 'Magazine',
                    url:'#'
                },
                {
                    link: 'DC Kids',
                    url:'#'
                },
                {
                    link: 'DC Universe',
                    url:'#'
                },
                {
                    link: 'DC Power Visa',
                    url:'#'
                },
            ],
            socialsLinks: [
                {
                    text: "Facebook",
                    img: "footer-facebook.png",
                    url: "#",
                },
                {
                    text: "Twitter",
                    img: "footer-twitter.png",
                    url: "#",
                },
                {
                    text: "Youtube",
                    img: "footer-youtube.png",
                    url: "#",
                },
                {
                    text: "Pinterest",
                    img: "footer-pinterest.png",
                    url: "#",
                },
                {
                    text: "Periscope",
                    img: "footer-periscope.png",
                    url: "#",
                },
            ]
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

                        a{
                            text-decoration: none;
                            color: rgba(255, 255, 255, 0.5);
                        }
                    }
                }
                div#logo-background{
                    width: 40%;
                    min-width: 500px;
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