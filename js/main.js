const app = new Vue(
    {
        el: '#app',
        data:{
            seriesList:[],
            singleSeries: '',
        },
        methods:{
            addSeriesToList: function(title){
                if(this.singleSeries !== '' && event.charCode != 32){
                    const series ={};
                    series.title= title.trim();
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
        }
    }
)