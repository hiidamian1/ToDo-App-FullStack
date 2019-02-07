<template>
    <div class="login-box">
        <h3>Register</h3>
        <input type="text" v-model="username" placeholder="Username">
		<input type="text" v-model="password" placeholder="Password">
        <input type="submit" v-on:click="register" value="Register">
    </div>
</template>

<script>
import UserService from "../UserService.js";

export default {
    name: "Register",
    data() {
        return {
            username: "",
            password: ""
        };
    },
    methods: {
        async register(e) {
            try {
                e.preventDefault();
                const result = await UserService.registerUser(this.username, this.password);
                console.log(result.status);
                this.$router.push('/login');
            } catch(err) {
                this.err = err.message;
                alert(err.message);
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
