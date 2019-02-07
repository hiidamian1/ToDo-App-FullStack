<template>
    <div class="login-box">
        <h3>Login</h3>
        <input type="text" v-model="email" placeholder="Email">
		<input type="text" v-model="password" placeholder="Password">
        <input type="submit" value="Login">
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: ""
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
