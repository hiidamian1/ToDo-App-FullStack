<template>
  <div class="root">
    <Header v-bind:username="this.$route.params.username"/>
    <Filters v-bind:dateFormat="dateFormat" v-on:update="updateTodoList"/>
    <div id="home">
      <TodoInput v-on:add-todo="addTodo"/>
      <TodoList v-bind:todos="todos" v-bind:dateFormat="dateFormat" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo"/>
    </div>
  </div>
</template>

<script>
import TodoList from "../components/Todos";
import Header from "../components/Header.vue";
import Filters from "../components/Filters.vue";
import TodoInput from "../components/TodoInput.vue";
import PostService from "../PostService.js";

export default {
  name: "Home",
  components: {
    TodoList, 
    TodoInput,
    Header,
    Filters
  },
  data() {
    return {
      todos: [],
      filters: {},
      dateFormat: "D dsu MMM yyyy"
    };
  },
  methods: {
    async addTodo(newTodo) {
      try {
        await PostService.addTodo(newTodo.title);
        this.todos = await PostService.getTodos(this.filters);
      } catch(err) {
        this.error = err.message;
      }
    },
    async deleteTodo(todoId) {
      try {
        await PostService.deleteTodo(todoId.id);
        this.todos = await PostService.getTodos(this.filters);
      } catch(err) {
        this.error = err.message;
      }
    },
    async updateTodo(update) {
      try {
        await PostService.updateTodo(update.id, update.completed, update.deadline);
        this.todos = await PostService.getTodos(this.filters);
      } catch(err) {
        this.error = err.message
      }
    },
    async updateTodoList(listParams) {
      try {
        this.filters = listParams;
        this.todos = await PostService.getTodos(this.filters);
      } catch (err) {
        this.error = err.message;
      }
    }
  },
  async created() {
    try {
      this.todos = await PostService.getTodos(this.filters);
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

