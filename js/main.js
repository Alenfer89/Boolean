const app = new Vue(
    {
        el: '#app',
        data:{

        },
        methods:{

        }
    }
);

axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    .then(function(response){
        console.log(response)
        console.log(response.data)
        console.log(response.data.response)
})

