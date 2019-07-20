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
@import "./assets/css/style.css";
</style>
