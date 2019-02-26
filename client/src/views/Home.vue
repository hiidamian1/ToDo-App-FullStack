<template>
  <div>
    <Header v-on:update="updateTodoList"/>
    <div id="home">
      <TodoInput v-on:add-todo="addTodo"/>
      <TodoList v-bind:todos="todos" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo"/>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/Todos";
import Header from "../components/Header.vue";
import TodoInput from "../components/TodoInput.vue";
import PostService from "../PostService.js";

export default {
  name: "Home",
  components: {
    TodoList, 
    TodoInput,
    Header
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    async addTodo(newTodo) {
      try {
        await PostService.addTodo(newTodo.title);
        this.todos = await PostService.getTodos({});
      } catch(err) {
        this.error = err.message;
      }
    },
    async deleteTodo(todoId) {
      try {
        await PostService.deleteTodo(todoId.id);
        this.todos = await PostService.getTodos({});
      } catch(err) {
        this.error = err.message;
      }
    },
    async updateTodo(update) {
      try {
        console.log(update.deadline);
        await PostService.updateTodo(update.id, update.completed, update.deadline);
        this.todos = await PostService.getTodos({}); //fix to use current filters, whatever they are
      } catch(err) {
        this.error = err.message
      }
    },
    async updateTodoList(listParams) {
      try {
        this.todos = await PostService.getTodos(listParams)
      } catch (err) {
        this.error = err.message;
      }
    }
  },
  async created() {
    try {
      this.todos = await PostService.getTodos({});
    } catch(err) {
      this.error = err.message;
    }
  }
}
</script>
