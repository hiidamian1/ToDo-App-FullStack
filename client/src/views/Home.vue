<template>
  <div class="root">
    <Filters v-bind:dateFormat="dateFormat" v-on:update="updateTodoList"/>
    <div id="home">
      <TodoInput v-on:add-todo="addTodo"/>
      <TodoList v-bind:todos="displayedTodos" v-bind:dateFormat="dateFormat" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo"/>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/Todos";
import Filters from "../components/Filters.vue";
import TodoInput from "../components/TodoInput.vue";
import PostService from "../PostService.js";

export default {
  name: "Home",
  components: {
    TodoList, 
    TodoInput,
    Filters
  },
  data() {
    return {
      todos: [],
      displayedTodos: [],
      dateFormat: "D dsu MMM yyyy",
      filters: {}
    };
  },
  methods: {
    async addTodo(newTodo) {
      try {
        const response = await PostService.addTodo(newTodo.title);
        this.todos.push(response.data);
        this.displayedTodos.push(response.data); 
        this.updateTodoList(this.filters);
        //this.displayedTodos = await PostService.getTodos();
      } catch(err) {
        this.error = err.message;
      }
    },
    async deleteTodo(todoId) {
      try {
        await PostService.deleteTodo(todoId.id);
        this.todos = this.todos.filter(todo => todo._id != todoId.id);
        this.displayedTodos = this.displayedTodos.filter(todo => todo._id != todoId.id);
        //this.displayedTodos = await PostService.getTodos();
      } catch(err) {
        this.error = err.message;
      }
    },
    async updateTodo(update) {
      try {
        await PostService.updateTodo(update.id, update.completed, update.deadline);
        //this.displayedTodos = await PostService.getTodos();

        for (let todo of this.todos) {
          if (todo._id == update.id) {
            todo.completed = update.completed; 
            todo.deadline = update.deadline;
            break;
          }
        }

        for (let todo of this.displayedTodos) {
          if (todo._id == update.id) {
            todo.completed = update.completed; 
            todo.deadline = update.deadline;
            break;
          }
        }

        this.updateTodoList(this.filters);
      } catch(err) {
        this.error = err.message
      }
    },
    async updateTodoList(filters) {
      try {
        this.filters = filters;

        this.displayedTodos = this.todos.slice(); //"resets" list that gets displayed before being trimmed down
        if (filters.hideCompleted || filters.deadline) {
          this.displayedTodos = this.displayedTodos.filter(todo => this._applyFilters(todo, filters));
        }

        if (filters.byDate) {
          if (filters.ascending) {
            this.displayedTodos.sort((todo1, todo2) => {
              return new Date(todo1.deadline) - new Date(todo2.deadline);
            })
          } 

          if (filters.descending) {
            this.displayedTodos.sort((todo1, todo2) => {
              return new Date(todo2.deadline) - new Date(todo1.deadline);
            })
          }
        } 
        if (filters.byAlphabetical) {
          if (filters.ascending) {
            this.displayedTodos.sort((todo1, todo2) => {
              return (todo1.title.toUpperCase() < todo2.title.toUpperCase()) ? -1 : (todo1.title.toUpperCase() > todo2.title.toUpperCase()) ? 1 : 0;
            });
          } 

          if (filters.descending) {
            this.displayedTodos.sort((todo1, todo2) => {
              return (todo1.title.toUpperCase() > todo2.title.toUpperCase()) ? -1 : (todo1.title.toUpperCase() < todo2.title.toUpperCase()) ? 1 : 0;
            });
          }
        }
      } catch (err) {
        this.error = err.message;
      }
    },
    _applyFilters(todo, filters) {    
      //see if todo is completed or not  
      if (filters.hideCompleted) {
        if (todo.completed) {
          return false;
        }
      }

      //see if todo deadline falls within date range
      if (filters.deadline) {
        if (!todo.deadline) {
          return false;
        } else {
          let startDate;
          let endDate;
          const todoDeadline = new Date(todo.deadline);

          if (filters.deadline.length == 1) {
            startDate = filters.deadline[0];
            endDate = new Date();
            endDate.setTime(startDate.getTime() + 24 * 3600000); 
          } else {
            startDate = filters.deadline[0];
            endDate = filters.deadline[1];
          }

          if (startDate && endDate) {
            return todoDeadline >= startDate && todoDeadline < endDate;
          } else if (startDate) {
            return todoDeadline >= startDate;
          } else {
            return todoDeadline < endDate;
          }
        }
      }
      //if all tests pass, display the todo
      return true;
    }
  },
  async created() {
    try {
      this.todos = await PostService.getTodos();
      this.displayedTodos = this.todos.slice(); // makes copy of this.todos
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>

<style scoped>
  .root {
    width: 100%;
  }
</style>

