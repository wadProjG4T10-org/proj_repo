<template>
<body>
  <div>
      <!-- <div class="background1" style="margin-top: 19vh;"> -->
    <div class="header1">Alzheimer's Disease Game</div>
    <div class="header2">Points Earned: {{ this.score }}</div>
    <!-- <div>{{ store.state.userEmail }}</div> -->
    <!-- <div>{{store.state.userEmail}}</div> -->
    <!-- <canvas ref="input" style="height:1000px; width:1000px;">Test</canvas> -->
      <ion-phaser
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />
  </div>
</body>
</template>

<script>

import Phaser from 'phaser';
import AlzheimersPreloader from '../AlzhGame_files/preloader';
import AlzheimersGame from '../AlzhGame_files/Game';
import AlzheimersStart from '../AlzhGame_files/startScreen';
import AlzheimersEducation from '../AlzhGame_files/educationalSnippet';
import eventsCenter from '../AlzhGame_files/EventsCenter';
// import { inject } from 'vue';

// var input;

export default {
  name: 'AlzheimersGame',
  beforeCreate() {
    if (window.localStorage.getItem("userInformation") === null) {
      this.$router.push('/login');
    }
  },
  created: function() {
    this.initUpdates(this);
  },
  // setup() {
  // const store = inject('store');
  //   return {
  //     store
  //   }
  // },
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
      // console.log("gen");
      // console.log(input);
      return (updated_score) => {
        vm.score = updated_score;
      }
    },
  },
  // onCreate() {
  //     this.$router.push('/games/alzh')
  //   }
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
  .special-jumbotron {
    height: "100vh";
    width: "100vw";
  }

  .background1 {
    background-image: url('../assets/snakeBackground.jpg');
    width:100%;
    height:100%; 
    background-size: cover;
  }

body{
  background-image: linear-gradient(to bottom right, #4a86965d, #9cadce,#ff69b489);
}

.header1{
  font-family:mySecondFont;
  padding-top:20px;
  font-size:20px;
}
.header2{
  font-family:myFirstFont;
  font-size:30px;
}
</style>
