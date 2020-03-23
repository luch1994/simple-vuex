<template>
  <div id="app">
    <!-- <vuex-demo /> -->
    <simple-vuex-demo />
  </div>
</template>

<script>
// import VuexDemo from './components/vuex-demo.vue'
import SimpleVuexDemo from './components/simple-vuex-demo';

export default {
  name: 'App',
  components: {
    // VuexDemo,
    SimpleVuexDemo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
