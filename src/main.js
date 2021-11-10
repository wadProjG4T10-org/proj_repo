import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'


import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



defineIonPhaser(window);

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEHGh-l4Tl7P2ysQgtfD1pV79Zp6dySwU",
  authDomain: "wad2realtime.firebaseapp.com",
  databaseURL: "https://wad2realtime-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wad2realtime",
  storageBucket: "wad2realtime.appspot.com",
  messagingSenderId: "517809538208",
  appId: "1:517809538208:web:d3f88245d34c767033b5c5",
  measurementId: "G-F1MW65RKME"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseapp);


// db.settings({ timestampsInSnapshots: true });




const app = createApp(App)
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')