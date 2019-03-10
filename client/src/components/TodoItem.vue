<template>
	<div>
		<!-- Couchbase JSON response 
		<div class="todo-item" v-bind:class="{"is-complete": item.ToDoAppBucket.completed}" v-on:click="markComplete">
			{{item.ToDoAppBucket.title}}
		</div>-->
		<div class="todo-item">
			<div class="todo-text" v-on:click="markComplete">
				<div v-bind:class="{'is-complete': item.completed, 'is-overdue': this.state.overdue}">
					{{item.title}}
				</div>

				<div class="tooltip" v-if="item.completed">
					Mark Uncomplete
				</div>
				<div class="tooltip" v-else>
					Mark Complete
				</div>
			</div>
			<div class="todo-deadline">
				<Datepicker @selected="addDeadline" v-bind:disabledDates="this.state.disabledDates" v-bind:value="item.deadline"/>
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
		data() {
			return {
				state: {
					disabledDates: {
						to: this._exclusiveCurrentDate()
					},
					overdue: false,
					overdueComplete: false
				}
			}
		},
		components: {
			Datepicker
		},
		methods: {
			addDeadline(date) {
				const update = {
					id: this.item._id,
					deadline: date,
					completed: this.item.completed
				}

				this.$emit("update-todo", update);
			},
			markComplete() {
				const update = {
					id: this.item._id,
					deadline: this.item.deadline,
					completed: !this.item.completed
				}

				if (!this.item.completed && this.state.overdue) {
					console.log("changing to black");
					this.state.overdue = false;
					this.overdueComplete = true;
				} else if (this.overdueComplete) {
					console.log("changing to red");
					this.state.overdue = true;
					this.overdueComplete = false;
				}

				this.$emit("update-todo", update);
			},
			deleteTodo(e) {
				e.preventDefault();
				const todoId = {
					// Couchbase JSON response
					// id: this.item.id
					id: this.item._id					
				}
				this.$emit("delete-todo", todoId);
			},
			_exclusiveCurrentDate() {
				let date = new Date();

				date.setDate(date.getDate() - 1);
				
				return date;
			}
		},
		created() {
			const itemDate = new Date(this.item.deadline);
			const currentDate = this._exclusiveCurrentDate();

			if (itemDate < currentDate && !this.item.completed) {
				console.log("overdue, created");
				this.state.overdue = true;
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
		padding: .7rem;
		border-bottom: .1rem #ccc dotted;
		cursor: pointer;
	}
	
	.todo-text {
		flex: 1;
		font-size: 1.6rem;
	}

	.deleteButton {
		display: inline-block;
		border: none;
		background: red;
		color: #fff;
		padding: .7rem 0rem;
		cursor: pointer;
		width: 7%;
	}

	.deleteButton:hover {
		background: #ff3333;
	}

	.is-complete {
		text-decoration: line-through;
	}

	.is-overdue {
		color: red;
	}

	.tooltip {
		display: flex;
		visibility: hidden;
		position:relative;
		color: #333;
		padding: .2rem;
		font-size: 1.2rem;
		margin: 0rem .5rem;
		justify-content: center;
		flex-direction: column;
	}

	.todo-item:hover .tooltip {
		visibility: visible;
	}

</style>