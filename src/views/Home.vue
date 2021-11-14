<template>
  
  <div class="container-fluid">

    <b-row class='rows well aos-item' 
    style="background: #d4afb9;" 
    data-aos="zoom-in">

      <b-col>
        <h1>kritical care</h1> <br>
        <p>
          Scroll down to see what we have in store for you.
        </p>
        <p>
          Navigate through our site with the sections below 
          or with the navigation bar at the top
        </p>

        <p class='scrollDown'>
          Scroll down
          <img src='../assets/arrow.png' class='scrollImg'>
        </p>
      
      </b-col>
    </b-row>

    <b-row class='rows well aos-item' 
    style="background: #d1cfe2; cursor: pointer;" 
    data-aos="fade-left" 
    @click="goToGamesMenu">

      <b-col>
        <img src='../assets/game.png' class='icons'> <br>
        Educational games in Singapore that teach about illnesses
      </b-col>
    </b-row>

    <b-row class='rows aos-item' 
    style="background: #9cadce; cursor: pointer;" 
    data-aos="fade-right"
    @click="goToMap">

      <b-col>
        <img src='../assets/gps.png' class='icons' > <br>
        Want to find the nearest clinics and hospitals?
      </b-col>
    </b-row>

    <b-row class='rows' 
    style="background: #7ec4cf; cursor: pointer;" 
    data-aos="fade-left"
    @click='goToInformationDashboard'>


      <b-col>
        <img src='../assets/info_icon.png' class='icons'> <br>
        Information about the top 3 illnesses faced by the Elderly.
      </b-col>
    </b-row>

    <b-row class='rows' 
    style="background: #daeaf6;" 
    data-aos="fade-right">
      
        <b-col>
          <b>About kritical care...</b> 
          <br>
          We wanted to create a website that can teach children about the serious illnesses 
          that the Elderly face as well as what they can do to help.
        </b-col>
    </b-row>

    <b-row class='rows'
    data-aos="zoom-in-up">
      <b-col>
        Special Thanks to <br>
        Prof Mok <br>
        and <br>
        Instructor Lay Foo<br>
      </b-col>
    </b-row>

  </div>
  
</template>

<script>

import AOS from 'aos'

export default {
  name: 'Home',
  emit: ['userLoggedInListener'],
  beforeCreate() {
    if (window.localStorage.getItem("userInformation") === null) {
      this.$router.push('/login');
    }
  },
  mounted() {
    this.$emit('userLoggedInListener', null);
    AOS.init({
      debounceDelay: 50,
      offset: 100,
      once: false, 
      mirror: true,
      })
  }, methods: {
        goToGamesMenu: function() {
            this.$router.push('/games');
        },
        goToMap: function() {
            this.$router.push('/map');
        },
        goToInformationDashboard: function() {
            this.$router.push('/information');
        },
    }
}
</script>

<style>
@font-face {
    font-family: mySecondFont;
    src: url('../fonts/IndieFlower-Regular.ttf');
}

#app {
  font-family: mySecondFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

p { 
  font-size: 20px;
  text-align: center;
}

.container-fluid {
  display: block;
  font-family: mySecondFont;
  font-size: 30px;
  overflow-x: hidden;
}

.icons {
  width: 35px;
  height: 35px;
}

.rows {
  height: 90vh;
  align-content: center;
}

@keyframes pusle
{
    0% {
        bottom: 1.5%;
    }
    50% {
        bottom: 3%;
    }
    100% {
        bottom: 1.5%;
    }
}

.scrollImg {
  position: absolute;
  width:25px;
	height:25px;
  animation: pusle 2s infinite;
}

.scrollDown {
  height: 30%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

</style>
