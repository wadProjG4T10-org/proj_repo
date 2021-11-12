<template>
  <div class="page">
  <b-container fluid>
      <b-row>
        <b-col sm="2"></b-col>
        <b-col sm="8">

          <b-card class='m-1' style='padding-bottom: 20;'> 
            <img src='../assets/kriticalcare(newedit).png' class='logo'>

            <b-card-text>Providing all your healthcare information</b-card-text>
            
            <b-button type="submit" @click="store.methods.onLogin" variant='link'>
              <img src='../assets/google/normal.png' class='loginImg'>
            </b-button>
          </b-card>

        </b-col>
        <b-col sm="2"></b-col>
      </b-row>
  </b-container>

   <b-container fluid class='imgContainer'>
      <b-row>

        <b-col>
          <img src='../assets/loginPageImg/doctor.png' class='icon'>
        </b-col>
        <b-col>
          <img src='../assets/loginPageImg/first-aid-kit.png' class='icon'>
        </b-col>
        <b-col>
          <img src='../assets/loginPageImg/medical-history.png' class='icon'>
        </b-col>
        <b-col>
          <img src='../assets/loginPageImg/doctor.png' class='icon'>
        </b-col>
        <b-col>
          <img src='../assets/loginPageImg/first-aid-kit.png' class='icon'>
        </b-col>
        <b-col>
          <img src='../assets/loginPageImg/medical-history.png' class='icon'>
        </b-col>

      </b-row>

  </b-container>
  </div>
</template>


<script>
import { inject } from 'vue';

export default {
  name: 'LoginPage',
  setup() {
  const store = inject('store');
    return {
      store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}
body {
  background: white;
}

.page {
  background: #ffeeee;
  height: 600px;
}

.loginImg:hover {
  background: url('../assets/google/focus.png')
}

.logo {
  width: 100px;
  height: 100px;
}

.icon {
  width: 100%;
}

.imgContainer {
  position: absolute;
  width: 100%;
  bottom: 0;
}

</style>