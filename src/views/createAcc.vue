<template>

  <div class="container rounded " style="margin-top: 20vh;">
      <div class="row">
        <div class="col-md-8 border border-dark">
          
          <p v-if="errors.length">
             <b>Please correct the following error(s):</b>
              <ul>
                <li v-for="error in errors" :key="error.id">{{ error }}</li>
              </ul>
          </p>

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

              <b-form-group id="input-group-3" label="Confirm password:">
                <b-form-input
                  id="input-2"
                  type='password'
                  v-model="form.confirmPassword"
                  placeholder="Confirm password"
                  required
                ></b-form-input>
              </b-form-group>

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
  name: 'createAcc',
  data() {
      return {
        errors: [],
        form: {
          username: '',
          password: '',
          confirmPassword: '',
        },
      }
    },
    methods: {
      onCreate() {

        this.errors = [];
        
        if (this.form.username === '') {
          this.errors.push("Username empty");
        } else if (this.form.password !== this.form.confirmPassword) {
          this.errors.push('Passwords do not match');
        } else if (this.form.password === '') {
          this.errors.push("Password cannot be empty")
        } else {
          alert('Account has been created successfully! \nReturning you to the login in page')
          this.$router.push('/games/login')
        }
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