<template>
    <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white justify-content-center">
        <div class="container">
            <a class="navbar-brand" @click="goToHomePage"><img src="./assets/kriticalcare-shorter.png" alt="Kritical Care Logo" width="160" height="60" class="d-inline-block align-text-top"></a>

            <!-- Navbar collapse into an icon -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <!-- The bar contents to the right -->
                <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" @click="goToHomePage">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Games </a>
                        <!-- Games Dropdown -->
                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" @click="goToGamesMenu" >Games Menu</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" @click="goToAlzhGame">Animatch</a></li>
                            <li><a class="dropdown-item" @click="goToSnakeGame">Imma Eat You Up!</a></li>
                            <li><a class="dropdown-item" @click="goToDepressionGame">This is life</a></li>
                        </ul>
                    </li>
                    <!-- Map -->
                    <li class="nav-item">
                        <a class="nav-link" @click="goToMap">Map</a>
                    </li>
                    <!-- Information -->
                    <li class="nav-item">
                        <a class="nav-link" @click="checkRouter">Information</a>
                    </li>
                </ul>
            </div>
        </div>
        <a v-if="this.userStatus" style="padding-right: 40px; cursor:pointer; color:red;" @click="userLoggedOut"> Sign Out </a>
    </nav>

    <router-view @userLoggedInListener="isUserLoggedIn"/>
    <footer> Brought to you by Group 4 Team 10 &#169; Singapore Management University</footer>

</template>

<script>
// import { provide } from 'vue';
// import store from '@/store';
// import { useCounterProvider } from '../src/store/counter';
export default {
    name: 'App',
    data: () => ({
        userStatus: !!window.localStorage.getItem('userInformation'),
        // currentRoute: this.$router.currentRoute._value.href
    }),
    methods: {
        userLoggedOut: function() {
            window.localStorage.removeItem('userInformation');
            this.userStatus = !!window.localStorage.getItem('userInformation');
            this.$router.push('/login');
        },
        isUserLoggedIn: function() {
            this.userStatus = !!window.localStorage.getItem('userInformation');
        },
        goToGamesMenu: function() {
            this.$router.push('/games');
        },
        goToAlzhGame: function() {
            this.$router.push('/games/alzh');
        },
        goToSnakeGame: function() {
            this.$router.push('/games/diabetes');
        },
        goToDepressionGame: function() {
            this.$router.push('/games/depression');
        },
        goToLeaderboard: function() {
            this.$router.push('/games/leaderboard');
        },
        goToMap: function() {
            this.$router.push('/map');
        },
        goToInformationDashboard: function() {
            this.$router.push('/information');
        },
        goToHomePage: function() {
            this.$router.push('/home');
        },
    }
}
</script>

<style>
@font-face {
font-family: mySecondFont;
src: url('./fonts/IndieFlower-Regular.ttf');
}

.navbar {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    font-size: 20px;
    font-family: mySecondFont;
}
.dropdown:hover .dropdown-menu{
    display: block;
    border-radius: 15px;
}
.navbar-nav li{
    padding-left:10px;
    padding-right:10px;
    margin-left:5px;
    margin-right:5px;
}
.navbar-nav li:hover{
    background-color: #d1cfe2; 
    border-radius: 20px;
}
</style>
