import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'

defineIonPhaser(window);

const app = createApp(App)
app.config.compilerOptions.isCustomElement = tag => tag.startsWith('ion-') 
app.use(router)
app.mount('#app')