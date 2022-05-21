const app = Vue.createApp({
    data() {
        return {
            todos: [],
            newTodo: ''
        }
    },
    methods: {
        addTodo() {

            return this.todos.push(this.newTodo)
        }
    }
})