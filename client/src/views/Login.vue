<template>
    <div>
        <Header/>
        <div class="login-box">
            <h3>Login</h3>
            <input type="text" v-model="username" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <input type="submit" v-on:click="login" value="Login">
            <div>
                Don"t have an account? 
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
                    await UserService.verifyUser(this.username, this.password);
                    this.$router.push("/");
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
        margin: 20px auto;
        padding: 20px;
        text-align: center;
        font-weight: normal;
        border: 1px #ccc dotted;
    }

    input[type=text] {
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
