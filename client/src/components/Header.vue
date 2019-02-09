<template>
	<header class="header">
		<h1>To Do List</h1>
		<a href="#" v-if="loggedIn" v-on:click="logout" class="logout">Logout</a>
	</header>
</template>

<script>
	import UserService from '../UserService.js';

	export default {
		name: "Header",
		data() {
			return {
				loggedIn: false
			}
		},
		methods: {
			async logout(e) {
				e.preventDefault();

				try {
					await UserService.logoutUser();
					this.loggedIn = false;
					this.$router.push('/login');
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
		text-align: center;
		padding: 10px;
	}

	h1 {
		flex: 2;
	}

	.header a {
		color: #fff;
		padding-right: 5px;
	}

	.logout {
		text-decoration: none;
	}

</style>