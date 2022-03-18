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
                if(string !== ''){
                    const series ={};
                    series.title= string.trim();
                    series.done = true,
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
                object.done = !object.done;
                console.log('check')
                console.log(object.done)
                    
                
            }
        }
    }
)