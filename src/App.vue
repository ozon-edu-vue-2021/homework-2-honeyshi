<template>
  <div id="app">
    <file-system />
  </div>
</template>

<script>
import FileSystem from "./components/FileSystem.vue";

export default {
  name: "App",
  components: {
    FileSystem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 7rem;
}
</style>
