<template>
	<div>
		<div>
			<form @submit="addTodo">
				<input type="text" v-model="title" name="todoTitle" placeholder="Add Todo here" required>
				<button type="submit" class="submitButton">
					<i class="fas fa-plus"></i>
				</button>
			</form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "TodoInput",
		data() {
			return {
				title: ""			
			}
		}, 
		methods: {
			addTodo(e) {
				e.preventDefault();
				const newTodo = {
					title: this.title			
				};
				this.$emit("add-todo", newTodo);
				this.title = ""; //clear form
			}
		}
	}
</script>

<style scoped>
	form {
		display: flex;
	}

	input[type="text"] {
		flex: 10;
		padding: .5rem;
	}
	
	.submitButton {
		display: inline-block;
		border: none;
		background: #333;
		color: #fff;
		padding: .7rem 0rem;
		cursor: pointer;
		width: 7%;
	}

	.submitButton:hover {
		background: #555;
	}
</style>