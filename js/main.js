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
                    console.log('check true');
                    console.log(object.done);
                } else if(object.done == true){
                    object.done = false;
                    console.log('check false');
                    console.log(object.done);
                } else if(object.done == false){
                    object.done = null;
                    console.log('check null');
                    console.log(object.done);
                }
                console.log('check');
                console.log(object.done);
            }
        }
    }
)