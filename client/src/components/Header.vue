<template>
	<header class="header">
		<h1>To Do List</h1>
		<div class="logout"><a href="#" v-if="loggedIn" v-on:click="logout">Logout</a></div>
	</header>
</template>

<script>
	import UserService from "../UserService.js";

	export default {
		name: "Header",
		data() {
			return {
				loggedIn: false,
				hideCompleted: false,
				deadline: null
			}
		},
		methods: {
			update(e) {
				e.preventDefault();
				
				let filters = {};

				if (this.hideCompleted) {
					filters.hideCompleted = true;
				}

				if (this.deadline) {
					filters.deadline = this.deadline;
				}

				this.$emit("update", filters);
			},
			clear(e) {
				e.preventDefault();
				this.hideCompleted = null;
				this.deadline = null;
				this.$emit("update", {hideCompleted: this.hideCompleted, deadline: this.deadline})
			},
			async logout(e) {
				e.preventDefault();
				try {
					await UserService.logoutUser();
					this.loggedIn = false;
					this.$router.push("/login");
				} catch(err) {
					throw(err);
				}
			}
		},
		async created() {
			try {
				await UserService.authenticateUser(); 
				this.loggedIn = true;
			} catch(err) {
				throw(err);
			}
		}
	}
</script>

<style scoped>
	.header {
		background: #333;
		color: #fff;
		padding: 10px;
		text-align: center;
		border-bottom: 1px solid #555;
	}

	.header-text {
		display:flex;
	}

	.logout-div {
		flex: 1;
		text-align: right;
		padding-right: 20px;
		margin: auto 0px;
	}

	.title-div {
		flex: 1;
		padding-left: 20px;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	.logout {
		margin-top: 10px;
	}

</style>