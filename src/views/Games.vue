<template>
  <div class="background1">
      <br>
      <div class="container">

        <!-- GAME MENU TEXT -->
        <b-row>
          <b-col id="gameHead">Games Menu</b-col>
        </b-row>
        <br>

        <!-- GAME CARDS -->
        <b-card-group deck rounded>

              <!-- ALZHEIMER'S GAME CARD -->
              <b-card>
                <b-card-text>
                  <h4 style="font-size: 40px; font-weight:bold;" 
                      class="colour">
                    Animatch
                  </h4>
                </b-card-text>
                
                <br>
                
                <b-card-img :src="require('../assets/gameMenu-memoryicon.png')" alt="Memory Responsive image">
                </b-card-img>
                
                <br>
                <br>
                
                <b-card-text>
                  Test your memory with Animatch and see if you can get the highest score!
                </b-card-text>
                
                <br>
                
                <b-button class="btn" style="background-color: #d4afb9 !important;" href="/games/alzh" size="lg">
                  Play Now!
                </b-button>
              </b-card>

              <!-- SNAKE GAME'S CARD -->
              <b-card>
                <b-card-text>
                  <h4 style="font-size: 40px; font-weight:bold;" 
                      class="colour">
                    Imma Eat You Up!
                  </h4>
                </b-card-text>

                <br>
                
                <b-card-img :src="require('../assets/gameMenu-snakeicon.png')"  alt="Snake Responsive image">
                </b-card-img>
                
                <br>
                <br>
                
                <b-card-text>
                  Have fun with our Retro Snake Game and learn more about Diabetes through your journey!
                </b-card-text>
                
                <br>
                <b-button class="btn" style="background-color: #d4afb9 !important;" href="/games/diabetes" size="lg" >
                  Play Now!
                </b-button>
              </b-card>

              <!-- DEPRESSION GAME'S CARD -->
              <b-card>
                <b-card-text>
                  <h4 style="font-size: 40px; font-weight:bold;" 
                      class="colour">
                    This is life
                  </h4>
                </b-card-text>

                <br>

                <b-card-img :src="require('../assets/gameMenu-depressionicon.png')"  alt="Depression Responsive image">
                </b-card-img>
                
                <br>
                <br>
               
                <b-card-text>
                  Fond of Super Mario? Try out this game. Be Happy, this is our education on Depression!
                </b-card-text>
                
                <br>
                <b-button class="btn" style="background-color: #d4afb9 !important;" href="/games/depression" size="lg">
                  Play Now!
                </b-button>
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


export default {
  beforeCreate() {
    if (window.localStorage.getItem("userInformation") === null) {
      this.$router.push('/login');
    }
  },
  name: 'Games',

}
</script>

<style>
  @font-face {
    font-family: myFirstFont;
    src: url('../fonts/PressStart2P-Regular.ttf');
  }
  
  @font-face {
    font-family: mySecondFont;
    src: url('../fonts/IndieFlower-Regular.ttf');
  }

  .background1 {
    font-family: mySecondFont;
    background-image:
      linear-gradient(
        to bottom right, 
        #d4afb9, #9cadce, #7ec4cf
    );
    width:100%;
    height:100%; 
    background-size: cover;
  }

  #gameHead {
    font-family: myFirstFont; 
    font-size: 50px;
    color: white;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: black;
  }
  
  .colour {
      color: #9cadce;
      text-shadow: 2px 2px black;
  }

  .btn:hover {
    color: black !important;
    transform:scale(1.1);
  }


</style>