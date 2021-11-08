<template>
    <div class="container" style="margin-top: 20vh;">
      
      <b-row class="mt-5" style="max-width: 20rem; margin: auto;">
        <div style="font-family: myFirstFont;" >Game Menu</div>
      </b-row>

      <b-row class="my-5" style="max-width: 20rem; margin: auto;">
        <GameCard gameName="Alzheimer's Game" 
          gameDescription="This is a description about Alzheimer's Game which is very very very long."
          route="/games/alzh"  />
      </b-row>    

      <b-row class="my-5" style="max-width: 20rem; margin: auto;">
        <GameCard gameName="Snake Game" 
          gameDescription="Have fun with our Retro Snake Game and learn more about Diabetes through your journey!"
          route="/games/diabetes"  />
      </b-row>
        
    </div>
</template>

<script>

import GameCard from '../components/GameCard.vue'

export default {

  name: 'Games',
  components: {
    GameCard
  }
}
</script>

<style>
  @font-face {
    font-family: myFirstFont;
    src: url('../fonts/PressStart2P-Regular.ttf');
  }
</style>