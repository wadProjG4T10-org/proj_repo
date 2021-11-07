<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
              <a class="navbar-brand" href="#Home"><img src="./assets/kriticalcare(newedit).png" alt="" width="120" height="114" class="d-inline-block align-text-top"></a>
          <!--Navbar collapse into an icon -->
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>


          <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                  <li class="nav-item text-center">
                      <a class="nav-link" aria-current="page" href="#">Home</a>
                  </li>

                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Games</a>
                          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a class="dropdown-item" href="#">Heart Disease</a></li>
                              <li><a class="dropdown-item" href="#">Alzheimer's Disease</a></li>
                              <li><a class="dropdown-item" href="#">Diabetes</a></li>
                              <li><a class="dropdown-item" href="#">Depression</a></li>
                              <li><a class="dropdown-item" href="#">Falls</a></li>
                          </ul>
                  </li>

                  <li class="nav-item">
                      <a class="nav-link" href="#">Information</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link active">Locator</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>

</style>
