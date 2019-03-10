<template>
	<header class="header">
		<h1>To Do List</h1>
		<div class="logout">
			<a href="#" v-if="loggedIn" v-on:click="logout">
				Logout
			</a>
		</div>
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
		padding: 1rem;
		text-align: center;
		border-bottom: .1rem solid #555;
	}

	h1 {
		font-size: 2.4rem;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	.logout {
		margin-top: 1rem;
		font-size: 1.2rem;
	}

</style>