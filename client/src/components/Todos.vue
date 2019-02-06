<template>
	<div v-if="todos.length">
		<!--Couchbase JSON response
		<div v-bind:key="todo.id" v-for="todo in todos">-->
		<div v-bind:key="todo._id" v-for="todo in todos">
			<TodoItem v-bind:item="todo" v-on:delete-todo="deleteTodo" v-on:update-todo="updateTodo"/>
		</div>
	</div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
	name: "TodoList",
	components: {
		TodoItem
	},
	methods: {
		deleteTodo(todoId) {
			this.$emit('delete-todo', todoId);
		},

		updateTodo(update) {
			this.$emit('update-todo', update);
		}
	},
	props:["todos"]
}
</script>
