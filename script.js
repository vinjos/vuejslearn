function Todo(name) {
    this.name = name;
    this.completed = false;
    this.editing = false;
}

var app = new Vue({
    el: '#todoApp',
    data: {
        newTodoName: '',
        message: 'Hello Vue!',
        todoCollection: [
          new Todo('todo1'),
          new Todo('todo2'),
          new Todo('todo3'),
          new Todo('todo4'),
          new Todo('todo5')
      ]
    },
    methods: {
        OnDblClickTodoName: function(todo) {
            todo.editing = true;
        },
        OnEnterTodoName: function(todo) {
            todo.editing = false;
        },
        OnEnterAddTodo: function() {
            if(!this.newTodoName) {
                return;
            }
            this.todoCollection.push(new Todo(this.newTodoName));
            this.newTodoName = '';
        },
        OnClickAllDone: function() {
            this.todoCollection.filter(function(todo) {
                todo.completed = true;
            });
        }
    },
    computed: {
        counter: function() {
            return this.todoCollection.length;
        }
    }
  });
