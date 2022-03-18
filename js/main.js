const app = new Vue(
    {
        el: '#app',
        data:{
            seriesList:[],
            singleSeries: '',
        },
        methods:{
            addSeriesToList: function(series){
                if(this.singleSeries !== '' && this.singleSeries !== ' '){
                    this.seriesList.push(series.trim())
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