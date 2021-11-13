import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import AlzheimersGame from './views/AlzhGame.vue'
import Games from './views/Games.vue'
import Map from './views/Map.vue'
import SnakeGame from './views/snakeGame.vue'
import loginPage from "./views/loginPage.vue"
import depressionGame from './views/DepressionGame.vue'
import Information from './views/Information.vue'
import Leaderboard from './views/Leaderboard.vue'

const routes = [
    {path: '/', redirect: '/login'},
    { path: '/home', component: Home, name: "Home" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/games/alzh', component: AlzheimersGame, name: "Alzheimer's Game" },
    { path: '/map', component: Map, name: "Map"},
    { path: '/games/diabetes', component: SnakeGame, name: "Snake Game" },
    { path: '/login', component: loginPage, name: "Login Page" },
    { path: '/games/depression', component: depressionGame, name: "Depression Game" },
    { path: '/information', component: Information, name: "Information" },
    { path: '/games/leaderboard', component: Leaderboard, name: "Leaderboard" },
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})