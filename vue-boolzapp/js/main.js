const app = new Vue (
    {
        el: '#app',
        data:{
            activeContact: null,
            actualMessage: '',
            searchContact: null,
            messageCheckPoint: false,
            messageTime: dayjs(),
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        },
        methods:{
            specificContact: function(elementIndex){
                this.activeContact = elementIndex;
            },
            sendMessage: function(activeElement, messageToSend){
                if((messageToSend !== ' ') && (messageToSend !== '')){
                    //object creation
                    const newMessage = {};
                    newMessage.date = this.messageTime.format('DD/MM/YYYY' + ' ' + 'HH:mm:ss');
                    newMessage.message = messageToSend.trim();
                    newMessage.status = 'sent';
                    this.contacts[activeElement].messages.push(newMessage);
                    //flags settings
                    messageCheckPoint = false;
                    this.messageReset();
                    //fake response added
                    if(messageCheckPoint == false){
                        setTimeout(()=>{
                            const newMessage = {};
                            newMessage.date = this.messageTime.format('DD/MM/YYYY' + ' ' + 'HH:mm:ss');
                            newMessage.message = 'Ok!';
                            newMessage.status = 'received';
                            this.contacts[this.activeContact].messages.push(newMessage);
                        }, 1000)
                    }
                } else {
                    //flag settings
                    messageCheckPoint = true;
                    console.log('messaggio vuoto')
                }
            },
            messageReset: function(){
                this.actualMessage = '';
            },
            dateRetriever: function(activeElement, index){
                let hour = this.contacts[activeElement].messages[index].date.split(' ')[1].split(':')[0];
                let minutes = this.contacts[activeElement].messages[index].date.split(' ')[1].split(':')[1];
                let time = hour +':'+ minutes;
                return time;
            },
            contactSearch: function(string){
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(string.toLowerCase())){
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            },
            
        }
    }
)


// const testdate = dayjs();
// console.log(testdate.format('DD/MM/YYYY'))
// console.log(testdate.format('HH:mm:ss'))

//!failed experiments
// elegantLastMessage: function(index){
//     const date = dayjs(this.contacts[index].messages[this.contacts[index].messages.length -1].date , 'DD/MM/YYYY HH:mm:ss');
//     //return date.format('HH:mm')
//     return console.log(date.format('HH:mm'))
// }


// contactSearch: function(string){
//     this.contacts.forEach(element => {
//         const arrayOfName =[];
//         const arrayOfSearch =[];
//         element.name.toLowerCase().split('').forEach(letter =>{
//             arrayOfName.push(letter)
//         })
//         console.log(arrayOfName)
//         string.toLowerCase().split('').forEach(letter =>{
//             arrayOfSearch.push(letter)
//         })
//         console.log(arrayOfSearch)
//         for (let i = 0; i < arrayOfSearch; i++){
//             if (arrayOfName.includes(arrayOfSearch[i], 0 + i)){
//                 element.visible = true;
//             } else {
//                 element.visible = false;
//             }
//         }
//     });
// }




