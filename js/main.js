const app = new Vue(
    {
        el: '#app',
        data:{
            seriesList:[],
            singleSeries: '',
        },
        methods:{
            addSeriesToList: function(series){
                this.seriesList.push(series)
            },
            removeSeriesToList: function(seriesIndex){
                this.seriesList.splice(seriesIndex, 1)
            },
        }
    }
)