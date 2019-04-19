<template>
	<header class="header">
		<div id="hidden" class="user-options-button" v-if="displayLogout">
			<i class="fas fa-user"></i> 
			{{username}}
		</div>
		<h1>To Do List</h1>
		<div class="user-options-dropdown" v-if="displayLogout">
			<button class="user-options-button" v-on:click="displayDropdown = !displayDropdown">
				<i class="fas fa-user"></i> 
				{{username}}
			</button>
			<div class="user-options" v-if="displayDropdown">
				<router-link to="/profile">
					View Profile
				</router-link>
				<a href="#" class="option" v-on:click="logout">
					Logout
				</a>
			</div>
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
				displayDropdown: false,
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
					this.displayDropdown = false;
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
		display: flex;
		background: #333;
		color: #fff;
		padding: 1rem;
		text-align: center;
		border-bottom: .1rem solid #555;
	}

	h1 {
		font-size: 2.4rem;
		flex: 1;
	}

	.user-options-dropdown {
		position: relative;
		display: inline-block;
	}

	.user-options-button {
		font-size: 1.2rem;
		border: .1rem solid white;
		padding: .5rem;
		background: none;
		color: white;
		cursor: pointer;
	}

	.user-options-button:hover {
		opacity: .5;
	}

	.user-options {
		position: absolute;
		background-color: white;
		padding: .5rem;
		width: 100%;
		z-index: 1;
	}

	.user-option {
		border-bottom: .1rem solid #555;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	a:hover {
		opacity: 0.5;
	}

	.user-options a {
		color: black;
	}

	#hidden {
		visibility: hidden;
	}
</style>