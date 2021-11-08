import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AlzheimersGame from './views/AlzhGame.vue'
import Games from './views/Games.vue'
import Locator from './views/Locator.vue'
import SnakeGame from './views/snakeGame.vue'
import Information from './views/Information.vue'


const routes = [
    { path: '/', component: Home, name: "Home" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/games/alzh', component: AlzheimersGame, name: "Alzheimer's Game" },
    { path: '/map', component: Locator, name: "Locator"},
    { path: '/games/diabetes', component: SnakeGame, name: "Snake Game" },
    { path: '/information', component: Information, name: "Information"}
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})