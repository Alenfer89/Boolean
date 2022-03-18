const app = new Vue(
    {
        el: '#app',
        data:{
            seriesList:[
                
            ],
            singleSeries: '',
        },
        methods:{
            addSeriesToList: function(string){
                if(this.singleSeries !== ''){
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
                if(object.done = null){
                    object.done = true;
                    console.log(true)
                } else if (object.done = true){
                    object.done = false;
                    console.log(false)
                }
            }
        }
    }
)