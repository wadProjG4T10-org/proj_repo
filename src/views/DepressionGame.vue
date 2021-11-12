<template>
  <div style="margin-top: 20vh;">I am depression game</div>
  <div>{{ this.score }}</div>
    <div class="ion-container">
      <ion-phaser 
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
        />
    </div>
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
        type: Phaser.AUTO,
        width: 700,
        height: 600,
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
  .special-jumbotron {
height:95vh;
min-height:90%;
max-height:90%;
}
</style>