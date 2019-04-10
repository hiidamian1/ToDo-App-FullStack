<template>
	<header class="header">
		<h1>To Do List</h1>
		<div class="logout">
			<a href="#" v-if="displayLogout" v-on:click="logout">
				Logout {{username}}
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
				displayLogout: false,
				hideCompleted: false,
				deadline: null,
				username: ""
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
					this.displayLogout = false;
					localStorage.removeItem("username");
					this.username = "";
					this.$router.push("/login");
				} catch(err) {
					throw(err);
				}
			}
		},
		watch: {
			"$route" () {
				const user = localStorage.getItem("username");
				if (user) {
					this.displayLogout = true;
					this.username = user;
				}
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
		margin-top: .5rem;
		font-size: 1.2rem;
	}

</style>