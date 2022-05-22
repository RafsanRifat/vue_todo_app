app.cmponent('todo-input', {
    props:{

    },
    template: ` <div class="input-group mb-5 mt-4">
            <input v-model="newTodo" id="todoField" type="text" class="form-control border border-warning" placeholder="Add your todo" aria-label="Recipient's username" aria-describedby="button-addon2" >
            <button @click="addTodo" class="btn btn-warning" type="button" id="button-addon2" onclick="document.getElementById('todoField').value = ''">Add</button>
        </div>`
})