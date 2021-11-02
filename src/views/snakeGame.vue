<template>
<<<<<<< HEAD
  <!-- NAVIGATION BAR-->
  <ul>
    
    <li><a href="/"><img src="../assets/kriticalcare(newedit).png" alt="" width="100" height="100"></a></li>
    <li><a href="/games" width="100" height="100">Games Menu</a></li>
    <li><a href="/games">About</a></li>

  </ul> 

  <!-- GAME CONTAINER -->  
  <div class="background1">

    <div class="game-screen">
      <div style="color: white; font-family: myFirstFont;">Snake game</div>
      <div> {{this.score}}; </div>
      <ion-phaser 
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>

=======
  <div>Snake game</div>
  <div class="ion-container">
    <ion-phaser
      v-bind:game.prop="game"
      v-bind:initialize.prop="initialize"
    />
>>>>>>> a4035ac2379c4160d663b661130dd6ea3fc4e4f9
  </div>

</template>

<script>
import Phaser from 'phaser'
import snakeStart from '../snake_files/snakeStart.js'
import snakePreloader from '../snake_files/snakepreloader.js'
import snakeGame from '../snake_files/snakeGame.js'
// import gameOver from '../snake_files/gameOver.js'
import eventsCenter from '../snake_files/EventsCenter.js'

export default {
  name: 'SnakeGame',
  
  created: function() {
    this.initUpdates(this);
  },

  data: function() {
    return {
      diabetes_score: 0,
      initialize: true,
      game: {
        width: 570,
        height: 500,
        backgroundColor: '#7791a1',
        type: Phaser.AUTO,
        scene: [snakeStart, snakePreloader, snakeGame]  
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

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #5c616e;
  }

  li {
    float: left;
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;  
  }
  
  li a:hover {
    background-color: #7791a1;
  }

</style>
