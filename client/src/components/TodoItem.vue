<template>
	<div>
		<!-- Couchbase JSON response 
		<div class="todo-item" v-bind:class="{'is-complete': item.ToDoAppBucket.completed}" v-on:click="markComplete">
			{{item.ToDoAppBucket.title}}
		</div>-->
		<div class="todo-item" v-bind:class="{'is-complete': item.completed}" v-on:click="markComplete">
			{{item.title}}
		</div>
		<button class='deleteButton' v-on:click="deleteTodo">Delete</button>
	</div>
</template>

<script>
	export default {
		name: "TodoItem",
		props: ["item"],
		methods: {
			markComplete(e) {
				// Couchbase JSON response
				// this.item.ToDoAppBucket.completed = !this.item.ToDoAppBucket.completed;
				e.preventDefault();
				const update = {
					id: this.item._id,
					completed: !this.item.completed
				}

				this.$emit('update-todo', update);
			},
			deleteTodo(e) {
				e.preventDefault();
				const todoId = {
					// Couchbase JSON response
					// id: thos.item.id
					id: this.item._id					
				}

				this.$emit('delete-todo', todoId);
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex;
	}

	.deleteButton {
		display: inline-block;
		border: none;
		background: red;
		color: #fff;
		padding: 7px 0px;
		cursor: pointer;
		width: 7%;
	}

	.deleteButton:hover {
		background: #ff3333;
	}

	.todo-item {
		flex: 10;
		background: #f4f4f4;
		padding: 7px;
		border-bottom: 1px #ccc dotted;
		cursor: pointer;
	}

	.is-complete {
		text-decoration: line-through;
	}
</style>