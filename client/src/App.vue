<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "app"
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

  /*#app {
    width: 80%;
    margin: 5rem auto;
    border: .5rem black solid;
    border-radius: 1rem;
  }*/
</style>
