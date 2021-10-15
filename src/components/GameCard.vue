<template>
 <div class="game-card">
    <p>{{ gameName }}</p>

    <p>{{ gameDescription }}</p>

    <button class="btn" @click="onClick">Play Now!</button>
 </div>
</template>

<script>
export default {
  name: 'GameCard',
  props: {
    gameName: String,
    gameDescription: String,
    route: String
  },
  methods: {
      onClick() {
          this.$router.push(this.route)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game-card {
    background-color: white;
    height: 240px;
    width: 170px;
    border-radius: 10px;
    box-shadow: -2px 4px 5px 3px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items: center;
}

.btn {
    width: 8rem;
}
</style>
