

const app = Vue.createApp({
    data(){
        return{
            todos : [
                {id:1, name: 'This is the first todo'},
                {id:2, name: 'This is the second todo'},
                {id:3, name: 'This is the third todo'},
                {id:4, name: 'This is the fourth todo'}
            ]
        }
    }
})