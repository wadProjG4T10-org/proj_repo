<template>
  <div>Snake game</div>
  <div class="ion-container">
    <ion-phaser
      v-bind:game.prop="game"
      v-bind:initialize.prop="initialize"
    />
  </div>
</template>

<script>
import Phaser from 'phaser'
import snakeGame from '../snake_files/snakeGame.js'
import snakePreloader from '../snake_files/snakepreloader.js'


export default {
  name: 'SnakeGame',
  data() {
    return {
      initialize: true,
      game: {
        width: "80%",
        height: "80%",
        backgroundColor: '#673AB7',
        type: Phaser.AUTO,
        scene: [snakeGame, snakePreloader]

      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ion-container {
    width: 100vw;
    height: 50vh;
  }
</style>
