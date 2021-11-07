import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'


import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

defineIonPhaser(window);


const app = createApp(App)
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-')
app.use(router)
app.use(BootstrapVue3)
app.mount('#app')