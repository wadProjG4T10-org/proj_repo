<template>
  
  <div class="container-fluid">

    <b-row class='rows well aos-item' 
    style="background: #d4afb9" 
    data-aos="zoom-out"
    data-aos-offset=0>

      <b-col align="center">
        <h1>kritical care</h1>
      </b-col>
      <!-- <b-col align="center">
        <img src='../assets/kriticalcare(newedit).png' class='logoIcon'>
      </b-col> -->
    </b-row>

    <b-row class='rows well aos-item' 
    style="background: #d1cfe2;" 
    data-aos="fade-left">

      <b-col>
        <img src='../assets/game.png' class='icons'> <br>
        Educational games in Singapore that teach about illnesses
      </b-col>
    </b-row>

    <b-row class='rows aos-item' 
    style="background: #9cadce;" 
    data-aos="fade-right">

      <b-col>
        <img src='../assets/gps.png' class='icons'> <br>
        Want to find the nearest clinics and hospitals?
      </b-col>
    </b-row>

    <b-row class='rows' 
    style="background: #7ec4cf;" 
    data-aos="fade-left">

      <b-col>
        <img src='../assets/info_icon.png' class='icons'> <br>
        Information about the top 3 illnesses faced by the Elderly.
      </b-col>
    </b-row>

    <b-row class='rows' 
    style="background: #daeaf6;" 
    data-aos="fade-right"
    data-aos-offset=200>
      
      <b>About kritical care...</b> 
      <br>
      We wanted to create a website that can teach children about the serious illnesses that the Elderly face as well as what they can do to help.
     
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
  mounted() {
    AOS.init({
      debounceDelay: 50,
      offset: 450,
      once: false, 
      mirror: true,
      })
  },
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

.container-fluid {
  font-family: mySecondFont;
  font-size: 20px;
}

/* .logoIcon {
  width: 250px;
  height: 250px;
} */

.icons {
  width: 35px;
  height: 35px;
}

.rows {
  padding: 200px;
}

</style>
