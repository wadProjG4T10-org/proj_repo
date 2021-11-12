<template>
    <div class="page">
    <b-container fluid>
        <b-row>
          <b-col sm="3"></b-col>
          <b-col sm="6">
  
            <b-card class='m-1' style='padding-bottom: 20;'> 
              <img src='../assets/kriticalcare(newedit).png' class='logo'>
  
              <b-card-text>Providing all your healthcare information</b-card-text>
              
              <b-button type="submit" @click="onLogin" variant='link'>
                <img src='../assets/google/normal.png' class='loginImg'>
              </b-button>
            </b-card>
  
          </b-col>
          <b-col sm="3"></b-col>
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
// import { inject } from 'vue';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";

export default {
  name: 'LoginPage',
  created: function() {
    window.localStorage.removeItem('userInformation');
  },
  data() {
      return {
        form: {
          username: '',
          password: '',
        },
      }
    },
  methods: {
    onLogin() {
    const provider = new GoogleAuthProvider();

    var userInformation = {};

    const auth = getAuth();
    signInWithPopup(auth, provider)
        .then((result) => {
        // The signed-in user info.
        const user = result.user;
        var userCreation = user.metadata.createdAt;
        var userLastLogin = user.metadata.lastLoginAt;
        var userEmail = user.email;
        console.log(user);

        const db = getFirestore();

        if (userCreation === userLastLogin) {
          setDoc(doc(db, "users", userEmail), ({
          score: 0
          }));

          userInformation['uid'] = userEmail;
          userInformation['score'] = 0;

          window.localStorage.setItem('userInformation', JSON.stringify(userInformation));

        }

        else {
          userInformation['uid'] = userEmail;

          window.localStorage.removeItem('userInformation');
          
          var docRef = doc(db, "users", userEmail);

          getDoc(docRef).then((snapshot) => {
            var userScore = snapshot.data().score;
            // console.log(snapshot.data());
            console.log('old user');
            userInformation['score'] = userScore;
            userInformation = JSON.stringify(userInformation)
            window.localStorage.setItem('userInformation', userInformation);
          })
        }

        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
  
          console.log(errorCode);
          console.log(errorMessage);
          console.log(email);
          });
      },
    // onCreate() {
    //   this.$router.push('/games/create')
    // }
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
  bottom: 100px;
}
</style>