<template>
    <div>Game Menu</div>
    <section class="cards-container">
      <GameCard gameName="Alzheimer's Game" 
        gameDescription="This is a description about Alzheimer's Game which is very very very long."
        route="/games/alzh"  />
      <GameCard gameName="Insert Game Name here" 
        gameDescription="This is a description about Fall Game which is very very very long."
        route="" />
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