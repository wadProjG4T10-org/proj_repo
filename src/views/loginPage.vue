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
        <b-row align-content="between">
  
          <b-col>
            <img src='../assets/loginPageImg/doctor.png' class='icon'>
          </b-col>
          <b-col>
            <img src='../assets/loginPageImg/first-aid-kit.png' class='icon'>
          </b-col>
          <b-col>
            <img src='../assets/loginPageImg/cardiogram.png' class='icon'>
          </b-col>
          <b-col>
            <img src='../assets/loginPageImg/healthcare.png' class='icon'>
          </b-col>
          <b-col>
            <img src='../assets/loginPageImg/medical-history.png' class='icon'>
          </b-col>
          <b-col>
            <img src='../assets/loginPageImg/tele_doctor.png' class='icon'>
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
  mounted() {
    if (window.localStorage.getItem("userInformation") !== null) {
      this.$router.push('/home');
      // console.log('not logged in');
    }
    else {
      this.$router.push('/login');
      // console.log('logged in');
    }
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
        var userCreation = user.metadata.creationTime;
        var userLastLogin = user.metadata.lastSignInTime;
        var userEmail = user.email;
        var userName = user.displayName;
        // console.log(user);
        // console.log(userCreation);
        // console.log(userLastLogin);

        const db = getFirestore();

        // console.log(window.localStorage.getItem('userInformation'));

        if (userCreation === userLastLogin) {
          setDoc(doc(db, "users", userEmail), ({
            score: 0,
            name: userName
          }));

          userInformation['uid'] = userEmail;
          userInformation['score'] = 0;
          userInformation['name'] = userName;

          window.localStorage.setItem('userInformation', JSON.stringify(userInformation));
          this.$router.push('/home');
        }

        else {
          userInformation['uid'] = userEmail;
          userInformation['name'] = userName;
          
          var docRef = doc(db, "users", userEmail);

          getDoc(docRef).then((snapshot) => {
            var userScore = snapshot.data().score;
            // console.log(snapshot.data().score);
            userInformation['score'] = userScore;
            // console.log(typeof(userInformation['score']));
            userInformation = JSON.stringify(userInformation)
            window.localStorage.setItem('userInformation', userInformation);
            this.$router.push('/home');
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
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
  /* max-width: 176px; */
}

.imgContainer {
  max-width: 80%;
  bottom: 0px;
}
</style>