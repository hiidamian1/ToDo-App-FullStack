<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
  import Header from "./components/Header";

  export default {
    name: "app",
    components: {
      Header
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  html {
    font-size: 62.5%;
  }
</style>
