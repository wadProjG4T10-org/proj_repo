<template>

  <div class="container rounded " style="margin-top: 20vh;">
      <div class="row">
        <div class="col-md-8 border border-dark">
            <b-form>
                <b-form-group
                    id="input-group-1"
                    label="Username:"
                >
                    <b-form-input
                    id="input-1"
                    v-model="form.username"
                    type="username"
                    placeholder="Username"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Password:">
                    <b-form-input
                    id="input-2"
                    type='password'
                    v-model="form.password"
                    placeholder="Password"
                    required
                    ></b-form-input>
                </b-form-group>

                <b-button type="submit" @click="onLogin" style="background-color: yellow; color: black;">Login</b-button>

            </b-form>

        </div>
      </div>
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
        var userCreation = user.metadata.createdAt;
        var userLastLogin = user.metadata.lastLoginAt;
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
</style>