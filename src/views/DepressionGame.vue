<template>
  <body>
    <br>
    <div>This is Life</div>
    <div>Coins earned: {{ this.score }}</div>
      <div class="ion-container">
        <ion-phaser 
          v-bind:game.prop="game"
          v-bind:initialize.prop="initialize"
          />
      </div>
    <div>Use the arrows to move</div>
    <div>Collect coins, skip the spikes and win!</div>
  </body>
</template>

<script>
import Phaser from 'phaser'
import depressionGame from '../depressionGame/game.js'
import depressionPreloader from '../depressionGame/preloader.js'
import depressionStart from '../depressionGame/startScreen.js';
import depressionOver from '../depressionGame/gameOver.js';
import eventsCenter from '../depressionGame/EventsCenter.js'

export default {
  name: 'depressionGame',
  beforeCreate() {
    if (window.localStorage.getItem("userInformation") === null) {
      this.$router.push('/login');
    }
  },
  created: function() {
    this.initUpdates(this);
  },
  data() {
    return {
      score: 0,
      initialize: true,
      game: {
        width: "80%",
        height:"75%",
        type: Phaser.AUTO,
        backgroundColor: '#d1edff',
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_BOTH,
        physics: {
          default: 'arcade',
          arcade: {
            debug: false,
            gravity: { y: 500 },
          },
        },
        scene: [depressionStart, depressionPreloader, depressionGame, depressionOver], // first scene is auto run
        // scale: {
        //   mode: Phaser.Scale.ScaleModes.FIT,
        // },
        style: {
          width: 700,
          height: 600,
        }
      }
    }
  },
  methods: {
    initUpdates: function() {
      eventsCenter.on('score', this.generateUpdateScore(this), this);
    },
    generateUpdateScore: (vm) => {
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
@font-face {
  font-family: mySecondFont;
  src: url('../fonts/IndieFlower-Regular.ttf');
}

body{
  background-image: linear-gradient(to bottom right, #52acffa2, #233f77,#52acffa2);
  font-family: myFirstFont;
  color: white;
}
</style>