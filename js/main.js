const app = new Vue(
    {
        el: '#app',
        data:{
            emailArray: [],
        },
        methods:{
        },
        mounted(){
            const self = this;
            for (let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(function(response){
                    console.log(response.data.response);
                    self.emailArray.push(response.data.response); 
            })
            };
            console.log(self.emailArray);
        },
    }
);

// axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(function(response){
//         console.log(response)
        
//         console.log(response.data)
//         console.log(response.data.response)
//         //console.log(JSON.parse(response.data))
// })


// for (let i = 0; i < 10; i++){
//     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//     .then(function(response){
//         console.log(response.data.response)
// })
// }



