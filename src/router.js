import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AlzheimersGame from './views/AlzhGame.vue'
import Games from './views/Games.vue'
import FallGame from './views/FallGame.vue'
import SnakeGame from './views/snakeGame.vue'


const routes = [
    { path: '/', component: Home, name: "Home" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/games/alzh', component: AlzheimersGame, name: "Alzheimer's Game" },
    { path: '/games/fall', component: FallGame, name: "Fall Game" },
    { path: '/games/diabetes', component: SnakeGame, name: "Snake Game" },
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})