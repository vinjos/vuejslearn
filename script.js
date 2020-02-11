function Todo(name) {
    this.name = name;
    this.completed = false;
    this.editing = false;
}

var app = new Vue({
    el: '#todoApp',
    data: {
        filter: 'all',
        newTodoName: '',
        editingTodoName: null,
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
            if(todo.completed) {
                return;
            }
            todo.editing = true;
            this.editingTodoName = todo.name;
        },
        OnEnterTodoName: function(todo) {
            todo.editing = false;
            todo.name = this.editingTodoName;
            this.editingTodoName = null;
        },
        OnCancelTodo: function(todo) {
            todo.editing = false;
            this.editingTodoName = null;
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
        },
        SetFilter: function(filter) {
            this.filter = filter;
        },
        GetFilterButtonClass: function(filter) {
            return {
                'btn-outline-secondary': filter !== this.filter,
                'btn-secondary': filter === this.filter
            };
        },
        OnClickRemoveCompleted: function() {
            this.todoCollection = this.todoCollection.filter(function(todo) {
                return !todo.completed;
            })
        }
    },
    computed: {
        counter: function() {
            return this.todoCollection.length;
        },
        filteredTodoCollection: function() {
            var vm = this;
            return vm.todoCollection.filter(function(todo){
                switch(vm.filter) {
                    case 'all':
                        return true;
                    case 'active':
                        return !todo.completed;
                    case 'completed':
                        return todo.completed;
                }
            });
        }
    }
  });
