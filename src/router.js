import { createRouter, createWebHistory } from 'vue-router'
// import Home from './views/Home.vue'
import AlzheimersGame from './views/AlzhGame.vue'
import Games from './views/Games.vue'
import Locator from './views/Locator.vue'
import SnakeGame from './views/snakeGame.vue'
import loginPage from "./views/loginPage.vue"
import createAccount from "./views/createAcc.vue"


const routes = [
    { path: '/', redirect: "/games/login" },
    { path: '/games', component: Games, name: "Games" },
    { path: '/games/alzh', component: AlzheimersGame, name: "Alzheimer's Game" },
    { path: '/map', component: Locator, name: "Locator"},
    { path: '/games/diabetes', component: SnakeGame, name: "Snake Game" },
    { path: '/games/login', component: loginPage, name: "Login Page" },
    { path: '/games/create', component: createAccount, name: "Create Account" },
]

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})