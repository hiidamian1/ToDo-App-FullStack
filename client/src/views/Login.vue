<template>
    <div class="login-box">
        <h3>Login</h3>
        <input type="text" v-model="username" placeholder="Username">
		<input type="text" v-model="password" placeholder="Password">
        <input type="submit" v-on:click="login" value="Login">
    </div>
</template>

<script>
import UserService from '../UserService.js';

export default {
    name: "Login",
    data() {
        return {
            username: "",
            password: ""
        }
    },
    methods: {
        async login(e) {
            try {
                e.preventDefault();

                if (!this.username || !this.password) {
                    alert("Please fill in both username and password fields.");
                } else {
                    const result = await UserService.verifyUser(this.username, this.password);
                    this.$router.push('/');
                }
            } catch(err) {
                alert("Invalid username and password combination. Please try again.");
            }
        }
    }
}
</script>

<style scoped>
    .login-box {
        background: #f4f4f4;
        top: 50px;
        width: 450px;
        height: 200px;
        margin: 20px auto;
        text-align: center;
        font-weight: normal;
    }

    h3 {
        padding: 15px;
    }

    input[type=text] {
        display:block;
        margin: 20px auto;
    }

    input[type=submit] {
        margin: 10px;
    }

    .buttons {
        margin: 0px auto;
    }
</style>
