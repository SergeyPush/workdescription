<template>
  <div id="app">
    <app-home></app-home>
  </div>
</template>

<script>
import AppHome from "./views/Home";
export default {
  components: {
    AppHome
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
