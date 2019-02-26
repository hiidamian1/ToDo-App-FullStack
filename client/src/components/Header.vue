<template>
	<header class="header">
		<h1>To Do List</h1>
		<form @submit="update">
			<input type="checkbox" v-model="viewCompleted"> View Completed
			<Datepicker class="datepicker" v-model="deadline"/> Completed By
			<input type="submit" value="Update">
		</form>
		<div class="logout"><a href="#" v-if="loggedIn" v-on:click="logout">Logout</a></div>
	</header>
</template>

<script>
	import UserService from "../UserService.js";
	import Datepicker from "vuejs-datepicker";

	export default {
		name: "Header",
		components: {
			Datepicker
		},
		data() {
			return {
				loggedIn: false,
				viewCompleted: false,
				deadline: null
			}
		},
		methods: {
			update(e) {
				e.preventDefault();
				console.log("update");
				console.log(this.deadline);
				this.$emit("update", {viewCompleted: this.viewCompleted, deadline: this.deadline})
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

	.datepicker {
		color: black;
	}

	input[type=submit] {
    margin: 10px;
    border: 1px solid white;
		background: #333;
		color: #fff;
		padding: 7px 12px;
		cursor: pointer;
  }

	a {
		text-decoration: none;
		color: #fff;
	}

	.logout {
		margin-top: 10px;
	}

</style>