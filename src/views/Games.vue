<template>
  <div class="background1" style="margin-top: 19vh;">
      <br>
      <div class="container-fluid">

        <!-- GAME MENU TEXT -->
        <b-row>
          <b-col id="gameHead">Game Menu</b-col>
        </b-row>

        <br>
        <!-- OPTION NUMBER 1 -->
        <b-row style="margin: auto; font-family: Arial; max-width: 30rem;">
          <!-- ALZHEIMER'S GAME CARD -->
          <b-col>
            <GameCard gameName="Alzheimer's Game" 
              gameDescription="This is a description about Alzheimer's Game which is very very very long."
              route="/games/alzh"  />
          </b-col>
  
          <!-- SNAKE'S GAME CARD -->
          <b-col>
            <GameCard gameName="Snake Game" 
              gameDescription="Have fun with our Retro Snake Game and learn more about Diabetes through your journey!"
              route="/games/diabetes"  />
          </b-col>

        </b-row>
        <br>
        <hr>
        <br>

        <!-- OPTION NUMBER 2 -->
        <b-card-group deck rounded>

              <!-- ALZHEIMER'S GAME CARD -->
              <b-card title="Animate">
                <b-card-sub-title class="mb-2">Alzheimer's Game</b-card-sub-title>
                <br>
                <b-card-img :src="require('../assets/gameMenu-memoryicon.png')" fluid alt="Memory Responsive image"></b-card-img>
                <br>
                <br>
                <b-card-text>
                  This is a description about Alzheimer's Game which is very very very long.
                </b-card-text>
                <br>
                <b-button class="btn btn-pastel" href="/games/alzh" size="lg">Play Now!</b-button>
              </b-card>

              <!-- SNAKE GAME'S CARD -->
              <b-card title="Imma Eat You Up!">
                <b-card-sub-title class="mb-2">Snake Game</b-card-sub-title>
                <br>
                <b-card-img :src="require('../assets/gameMenu-snakeicon.png')" fluid alt="Snake Responsive image"></b-card-img>
                <br>
                <br>
                <b-card-text>
                  Have fun with our Retro Snake Game and learn more about Diabetes through your journey!
                </b-card-text>
                <br>
                <b-button class="btn" href="/games/diabetes" size="lg">Play Now!</b-button>
              </b-card>

              <!-- DEPRESSION GAME'S CARD -->
              <b-card title="This is life">
                <b-card-sub-title class="mb-2">Depression Game</b-card-sub-title>
                <br>
                <b-card-img :src="require('../assets/gameMenu-depressionicon.png')" fluid alt="Depression Responsive image"></b-card-img>
                <br>
                <br>
                <b-card-text>
                  Be Happy, this is our education on Depression!
                </b-card-text>
                <br>
                <b-button class="btn" href="/games/alzh" size="lg">Play Now!</b-button>
              </b-card>
        
        </b-card-group>
        
        <br>
        <br>
        <br>
        <br>
        <br>
      </div>

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

  .background1 {
    background-color: #9cadce;
    width:100%;
    height:100%; 
    background-size: cover;
  }

  #gameHead {
    font-family: myFirstFont; 
    font-size: 50px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
  }

  .row1 {
        background-color: #d4afb9; /* Dusty Pink */
  }

  .cards-container {
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    row-gap: 1rem;
  }

  .btn-pastel {
    background-color: #d4afb9;
  }
</style>