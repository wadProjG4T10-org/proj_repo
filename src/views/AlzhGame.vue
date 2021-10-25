<template>
  <div>I am alzh game</div>
  <div class="special-jumbotron">
    <ion-phaser
      v-bind:game.prop="game"
      v-bind:initialize.prop="initialize"
    />
  </div>
</template>

<script>
import Phaser from 'phaser'
import AlzheimersPreloader from '../AlzhGame_files/preloader';
import AlzheimersGame from '../AlzhGame_files/Game';

export default {
  name: 'AlzheimersGame',
  data() {
    return {
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
            gravity: { y: 0}
          }
        },
        scene: [AlzheimersPreloader, AlzheimersGame], // first scene is auto run
        scale: {
          mode: Phaser.Scale.ScaleModes.FIT,
        },
        style: {
          width: 700,
          height: 600,
        }
      }
    }
  }
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
