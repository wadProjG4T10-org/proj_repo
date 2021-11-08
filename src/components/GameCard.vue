<template>
  <div>
        <b-card bg-variant="info">
              <b-card bg-variant="danger" text-variant="white">
                <b-card-text> {{ gameName }} </b-card-text>
                <b-card-text> {{ gameDescription }} </b-card-text>
              </b-card>
              <br>
              <b-button class="btn" @click="onClick" variant="warning">Play Now!</b-button>
        </b-card>
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

.cardcolour .bg-variant {
   background-color: "#daeaf6";
}
</style>
