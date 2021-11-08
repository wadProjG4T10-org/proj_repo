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

                <b-button type="submit" @click="onLogin()" style="background-color: yellow; color: black;">Login</b-button>
                <b-button type="submit" @click="onCreate()" style="background-color: green; color: black;">Create Account</b-button>

            </b-form>
            
            <!-- testing for username and password -->
            <b-card class="mt-3" header="Form Data Result">
                <pre class="m-0">{{ form }}</pre>
            </b-card>

        </div>
      </div>
  </div>
</template>


<script>

export default {
  name: 'LoginPage',
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
        alert("Welcome back, " + this.form.username + "!")
      },
      onCreate() {
        this.$router.push('/games/create')
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
</style>