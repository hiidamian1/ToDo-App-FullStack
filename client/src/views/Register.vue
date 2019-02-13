<template>
    <div>
        <Header/>
        <div class="register-box">
            <h3>Register</h3>
            <input type="text" v-model="username" placeholder="Username">
            <input type="password" v-model="password" placeholder="Password">
            <input type="submit" v-on:click="register" value="Register">
        
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
            password: ""
        };
    },
    methods: {
        async register(e) {
            try {
                e.preventDefault();
                if (!this.username || !this.password) {
                    alert("Please fill in both username and password fields.");
                } else {
                    await UserService.registerUser(this.username, this.password);
                    this.$router.push("/login");
                }
            } catch(err) {
                // this.err = err.message;
                alert("That username is already taken. Please try again.");
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
