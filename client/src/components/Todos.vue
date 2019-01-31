<template>
	<div v-if="todos.length">
		<div v-bind:key="todo.id" v-for="todo in todos">
			<TodoItem v-bind:item="todo" v-on:delete-todo="deleteTodo"/>
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
		}
	},
	props:["todos"]
}
</script>
