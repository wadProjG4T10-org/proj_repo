<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <HelloWorld msg="IS216 Project" msg1="WAD 2 Project"/>
  <!-- component called like HTML tag, can use variables as placeholders-->
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
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
