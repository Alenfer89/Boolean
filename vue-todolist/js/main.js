const app = new Vue(
    {
        el: '#app',
        data:{
            seriesList:[
                {
                    title: 'The Walking Dead',
                    done: false,
                },
                {
                    title: 'Scrubs',
                    done: true,
                },
                {
                    title: 'Lost',
                    done: true,
                },
                {
                    title: 'The 100',
                    done: true,
                },
                {
                    title: 'Desperate Housewives',
                    done: false,
                }
            ],
            singleSeries: '',
        },
        methods:{
            addSeriesToList: function(string){
                if(string !== ''){
                    const series ={};
                    series.title= string.trim();
                    series.done = null,
                    this.seriesList.push(series)
                    this.singleSeries = '';
                } else{
                    console.log('controllo spazi')
                }
            },
            removeSeriesToList: function(seriesIndex){
                this.seriesList.splice(seriesIndex, 1)
            },
            watchListModifier: function (object){
                console.log(object.done)
                if(object.done == null){
                    object.done = true;
                } else if(object.done == true){
                    object.done = false;
                } else if(object.done == false){
                    object.done = null;
                }
            }
        }
    }
)