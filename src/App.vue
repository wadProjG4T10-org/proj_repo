<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="IS216 Project" msg1="WAD 2 Project"/>
  <AlzheimersGame/>
  <!-- component called like HTML tag, can use variables as placeholders-->
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import AlzheimersGame from './components/alzh_game.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    AlzheimersGame
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
