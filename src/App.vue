<template>
    <nav class="navbar navbar-light navbar-expand-md sticky-top bg-white justify-content-center">
        <div class="container">
            <a class="navbar-brand" href="/"><img src="./assets/kriticalcare-shorter.png" alt="Kritical Care Logo" width="160" height="60" class="d-inline-block align-text-top"></a>

            <!-- Navbar collapse into an icon -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="navbar-collapse collapse w-100" id="collapsingNavbar3">
                <!-- The bar contents to the right -->
                <ul class="nav navbar-nav ms-auto w-100 justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="/games" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Games </a>
                        <!-- Games Dropdown -->
                        <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarScrollingDropdown">
                            <li><a class="dropdown-item" href="/games">Games Menu</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="/games/alzh">Animatch</a></li>
                            <li><a class="dropdown-item" href="/games/diabetes">Imma Eat You Up!</a></li>
                            <li><a class="dropdown-item" href="/games/depression">This is life</a></li>
                        </ul>
                    </li>
                    <!-- Map -->
                    <li class="nav-item">
                        <a class="nav-link" href="/map">Map</a>
                    </li>
                    <!-- Information -->
                    <li class="nav-item">
                        <a class="nav-link" href="/information">Information</a>
                    </li>
                </ul>
            </div>
        </div>
        <a href="#" style="padding-right: 40px;"> Sign Out </a>
    </nav>

    <router-view/>
    <footer> Brought to you by Group 4 Team 10 &#169; Singapore Management University</footer>

</template>

<script>
// import { provide } from 'vue';
// import store from '@/store';
// import { useCounterProvider } from '../src/store/counter';
export default {
  name: 'App',
//   setup() {
//       provide('store', store)
//   }
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
