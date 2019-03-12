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
    top: 5rem;
    width: 50%;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    font-weight: normal;
    border: .1rem #ccc dotted;
  }

  @media(min-width: 768px) {
    .register-box {
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