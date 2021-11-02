<template>
    <div>Game Menu</div>
    <section class="cards-container">
      <GameCard gameName="Alzheimer's Game" 
        gameDescription="This is a description about Alzheimer's Game which is very very very long."
        route="/games/alzh"  />

      <GameCard gameName="Snake Game" 
        gameDescription="Have fun with our Retro Snake Game and learn more about Diabetes through your journey!"
        route="/games/diabetes"  />
    </section>
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
.cards-container {
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 1rem;
}
</style>