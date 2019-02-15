<template>
    <div>
        <Header/>
        <div class="register-box">
            <h3>Register</h3>
            <div class="error" v-if="error.length">
                {{error}}
            </div>
            <form @submit="register">
                <input type="text" v-model="username" placeholder="Username" required>
                <input type="password" v-model="password" placeholder="Password" required>
                <input type="submit" value="Register">
            </form>
        
            <div>
                Already have an account? 
                <router-link to="/login">
                    Login here.
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import UserService from "../UserService.js";
import Header from "../components/Header";

export default {
    name: "Register",
    components: {
        Header
    },
    data() {
        return {
            username: "",
            password: "",
            error: ""
        };
    },
    methods: {
        async register(e) {
            try {
                e.preventDefault();
                await UserService.registerUser(this.username, this.password);
                this.$router.push("/login");
            } catch(err) {
                this.error = "Username already exists. Please try again.";
            }
        }
    }
}
</script>

<style scoped>
    .register-box {
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
