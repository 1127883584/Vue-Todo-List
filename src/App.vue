<template>
  <div id="app" style="background-color:#eee;position: fixed;width: 100%;height: 100%;">
    <List/>
  </div>
</template>

<script>
import List from './components/List.vue'
export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
