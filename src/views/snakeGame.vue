<template>
  <br>
  <br>
  <br>

  <!-- GAME CONTAINER -->  
  <div class="background1">

    <div class="game-screen">

      <div style="color: white; font-family: myFirstFont;">Snake game</div>
      <br>
      <div style="color: white; font-family: myFirstFont;"> {{this.score}} </div>
      
      <ion-phaser 
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />

      <div style="color: white; font-family: myFirstFont;">Click into the game to pause/resume</div>      

    </div>

  </div>

</template>

<script>
import Phaser from 'phaser'
import snakeStart from '../snake_files/snakeStart.js'
import snakePreloader from '../snake_files/snakepreloader.js'
import snakeGame from '../snake_files/snakeGame.js'
import gameOver from '../snake_files/gameOver.js'
import eventsCenter from '../snake_files/EventsCenter.js'

export default {
  name: 'SnakeGame',
  
  created: function() {
    this.initUpdates(this);
  },

  data: function() {
    return {
      score: 0,
      initialize: true,
      game: {
        width: 570,
        height: 500,
        backgroundColor: '#d4afb9',
        type: Phaser.AUTO,
        scene: [snakeStart, snakePreloader, snakeGame, gameOver]  
      },
    }
  },

  methods: {
    initUpdates: function() {
      eventsCenter.on('score', this.generateUpdateScore(this), this);
    },
    generateUpdateScore: (vm) => {
      console.log("gen");
      //console.log(input);
      return (updated_score) => {
        vm.score = updated_score;
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @font-face {
    font-family: myFirstFont;
    src: url('../fonts/PressStart2P-Regular.ttf');
  }

  .game-screen {
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }

  .background1 {
    background-image: url('../assets/snakeBackground.jpg');
    width:100%;
    height:100%; 
    background-size: cover;
  }

</style>
