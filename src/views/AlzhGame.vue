<template>
  <div style="margin-top:20vh;">
    <div>I am alzh game</div>
    <div>{{ this.score }}</div>
    <div>{{ store.state.userEmail }}</div>
    <!-- <div>{{store.state.userEmail}}</div> -->
    <!-- <canvas ref="input" style="height:1000px; width:1000px;">Test</canvas> -->
      <ion-phaser
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />
  </div>
</template>

<script>

import Phaser from 'phaser';
import AlzheimersPreloader from '../AlzhGame_files/preloader';
import AlzheimersGame from '../AlzhGame_files/Game';
import AlzheimersStart from '../AlzhGame_files/startScreen';
import AlzheimersEducation from '../AlzhGame_files/educationalSnippet';
import eventsCenter from '../AlzhGame_files/EventsCenter';
import { inject } from 'vue';

var input;

export default {
  name: 'AlzheimersGame',
  created: function() {
    this.initUpdates(this);
  },
  setup() {
  const store = inject('store');
    return {
      store
    }
  },
  data: function() {
    return {
      score: 0,
      initialize: true,
      game: {
        type: Phaser.AUTO,
        physics: {
          default: 'arcade',
          arcade: {
            debug: false,
            gravity: { y: 0}
          }
        },
        scene: [AlzheimersStart, AlzheimersPreloader, AlzheimersGame, AlzheimersEducation], // first scene is auto run
        scale: {
          // mode: Phaser.Scale.ScaleModes.FIT,
        },
      }
    }
  },
  methods: {
    // sayHello: (vm) => console.log(vm.initialize),
    initUpdates: function () {
      eventsCenter.on('score', this.generateUpdateScore(this), this);
    },
    generateUpdateScore: (vm) => {
      console.log("gen");
      console.log(input);
      return (updated_score) => {
        vm.score = updated_score;
      }
    }
  },
  // onCreate() {
  //     this.$router.push('/games/alzh')
  //   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .special-jumbotron {
height: "100vh";
width: "100vw";
}
</style>
