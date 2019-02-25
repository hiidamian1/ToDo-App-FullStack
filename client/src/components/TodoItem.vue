<template>
	<div>
		<!-- Couchbase JSON response 
		<div class="todo-item" v-bind:class="{"is-complete": item.ToDoAppBucket.completed}" v-on:click="markComplete">
			{{item.ToDoAppBucket.title}}
		</div>-->
		<div class="todo-item">
			<div class="todo-text" v-on:click="markComplete">
				<div v-bind:class="{'is-complete': item.completed}">
					{{item.title}}
				</div>

				<div class="tooltip" v-if="item.completed">
					Mark Uncomplete
				</div>
				<div class="tooltip" v-else>
					Mark Complete
				</div>
			</div>
			<!--likely need to emit something here. emit on change?-->
			<div class="todo-deadline">
				<Datepicker/>
				<div class="tooltip">
					Add Deadline
				</div>
			</div>
		</div>
		<button class="deleteButton" v-on:click="deleteTodo">Delete</button>
	</div>
</template>

<script>
	import Datepicker from "vuejs-datepicker";

	export default {
		name: "TodoItem",
		props: ["item"],
		components: {
			Datepicker
		},
		methods: {
			markComplete() {
				// Couchbase JSON response
				// this.item.ToDoAppBucket.completed = !this.item.ToDoAppBucket.completed;
				// e.preventDefault();
				
				// this.item.completed = !this.item.completed;

				const update = {
					id: this.item._id,
					completed: !this.item.completed
				}

				this.$emit("update-todo", update);
			},
			addDeadline(e) {

			},
			deleteTodo(e) {
				e.preventDefault();
				const todoId = {
					// Couchbase JSON response
					// id: this.item.id
					id: this.item._id					
				}
				this.$emit("delete-todo", todoId);
			}
		}
	}
</script>

<style scoped>
	div {
		display: flex;
	}
	
	.todo-item {
		flex: 10;
		background: #f4f4f4;
		padding: 7px;
		border-bottom: 1px #ccc dotted;
		cursor: pointer;
	}
	
	.todo-text {
		flex: 1;
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

	.is-complete {
		text-decoration: line-through;
	}

	.tooltip {
		display: flex;
		visibility: hidden;
		position:relative;
		color: #333;
		padding: 2px;
		font-size: 12px;
		margin: 0px 5px;
		justify-content: center;
		flex-direction: column;
	}

	.todo-item:hover .tooltip {
		visibility: visible;
	}

</style>