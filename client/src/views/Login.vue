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
          const response = await UserService.verifyUser(this.username, this.password);
          this.$router.push({name: "home", params: {"username": response.data}});
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
    top: 5rem;
    width: 50%;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    font-weight: normal;
    border: .1rem #ccc dotted;
  }

  @media(min-width: 768px) {
    .login-box {
      width: 25%;
    }
  }

  .error {
    width: 75%;
    background: red;
    margin: 2rem auto;
    padding: .5rem;
  }

  input[type=text], input[type=password]{
    display:block;
    margin: 2rem auto;
    width: 100%;
  }

  input[type=submit] {
    margin: 1rem;
    border: none;
    background: #333;
    color: #fff;
    padding: .7rem 1.2rem;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background: #555;
  }

  .buttons {
    margin: 0rem auto;
  }
</style>