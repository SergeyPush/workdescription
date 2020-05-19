<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
export default {
  components: {
    Menu
  }
};
</script>

<style lang="scss">
body {
  background-color: #f4f8fe;
  color: #383b3f;
  font-family: "IBM Plex Sans", sans-serif;
}
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "IBM Plex Sans", sans-serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f4f8fe;
  height: 100vh;
}
</style>
