<template>
  <div>I am fall game</div>
    <div class="ion-container">
      <ion-phaser 
        v-bind:game.prop="game"
        v-bind:initialize.prop="initialize"
      />
    </div>
</template>

<script>
import Phaser from 'phaser'
export default {
  name: 'FallGame',
  data() {
    return {
      initialize: true,
      scale: {
          mode: Phaser.Scale.FIT
      },
      game: {
        width: "100%",
        height: "100%",
        type: Phaser.AUTO,
        scene: {
          init: function() {
            this.cameras.main.setBackgroundColor('#24252A')
          },
          create: function() {
            this.byeworld = this.add.text(
              this.cameras.main.centerX, 
              this.cameras.main.centerY, 
              "Bye World", { 
                font: "40px Arial", 
                fill: "#ffffff" 
              }
            );
            this.byeworld.setOrigin(0.5);
          },
          update: function() {
            this.byeworld.angle += 1;
          }
        }
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
