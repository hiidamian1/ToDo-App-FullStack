<template>
    <div>
        <Header/>
        <div class="login-box">
            <h3>Login</h3>
            <div class="error" v-if="error.length">
                {{error}}
            </div>
            <form @submit="login">
                <input type="text" v-model="username" placeholder="Username" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <input type="submit" value="Login">
            </form>
            <div>
                Don't have an account? 
                <router-link to="/register">
                    Register here.
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../UserService.js";
import Header from "../components/Header";

export default {
    name: "Login",
    components: {
        Header
    },
    data() {
        return {
            username: "",
            password: "",
            error: ""
        }
    },
    methods: {
        async login(e) {
            try {
                e.preventDefault();
                await UserService.verifyUser(this.username, this.password);
                this.$router.push("/");
            } catch(err) {
                this.error = "Username and Password mismatch, or username unregistered. Please try again.";
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
        margin: 20px auto;
        padding: 20px;
        text-align: center;
        font-weight: normal;
        border: 1px #ccc dotted;
    }

    .error {
        width: 75%;
        background: red;
        margin: 20px auto;
        padding: 5px;
    }

    input[type=text], input[type=password]{
        display:block;
        margin: 20px auto;
    }

    input[type=submit] {
        margin: 10px;
        border: none;
		background: #333;
		color: #fff;
		padding: 7px 12px;
		cursor: pointer;
    }

    input[type=submit]:hover {
		background: #555;
	}

    .buttons {
        margin: 0px auto;
    }
</style>
