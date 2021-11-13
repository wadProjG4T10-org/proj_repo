<template>

  <div class="background1">

    <!-- GAME CONTAINER --> 
    <div class="game-screen">

      <div style="color: white; font-family: myFirstFont;">Snake game</div>
      <br>
      <div style="color: white; font-family: myFirstFont;"> Score: {{this.score}} </div>
      
      <ion-phaser 
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />

      <div style="color: white; font-family: myFirstFont;">Move the snake with UP, DOWN, LEFT, RIGHT keys.</div>
      <br> 
      <div style="color: white; font-family: myFirstFont;">Press 'P' to pause | Press 'R' to resume</div>  
    
    </div>

  </div>
  
</template>

<script>
import Phaser from 'phaser'
import snakeStart from '../snake_files/snakeStart.js'
import snakePreloader from '../snake_files/snakepreloader.js'
import snakeGame from '../snake_files/snakeGame.js'
import gameOver from '../snake_files/gameOver.js'
import pauseScreen from '../snake_files/pauseScreen.js'
import eventsCenter from '../snake_files/EventsCenter.js'

export default {
  name: 'SnakeGame',

  beforeCreate() {
    if (window.localStorage.getItem("userInformation") === null) {
        this.$router.push('/login');
    }
  },
  
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
        backgroundColor: '#d4afb9', // d4afb9
        type: Phaser.AUTO,
        scene: [snakeStart, snakePreloader, snakeGame, pauseScreen, gameOver]  
      },
    }
  },

  methods: {
    initUpdates: function() {
      eventsCenter.on('score', this.generateUpdateScore(this), this);
    },
    generateUpdateScore: (vm) => {
      //console.log("gen");
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
