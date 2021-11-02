<template>
    <div id="app">
        <!--Navigation -->
        <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div class="container-fluid">
                    <a class="navbar-brand" href="#Home"><img src="../assets/kriticalcare(newedit).png" alt="" width="120" height="114" class="d-inline-block align-text-top"></a>
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

        <br><br>
        <br><br>
        <br><br>
        <!-- Header -->
        <section id="header">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Services</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            </div>
            <div class="row text-center">
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">E-Commerce</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Responsive Design</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            <div class="col-md-4">
                <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
                </span>
                <h4 class="service-heading">Web Security</h4>
                <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
            </div>
            </div>
        </div>
        </section>
        <br><br>
        <!-- Map Grid -->
        <section class="map">
            <div class="container">
                <Map></Map>
            </div>

        </section>


         <!-- Team -->
        <section class="bg-light" id="team">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="../assets/cam.jpeg" alt="" width="90" height="90">
                    <h4>S Guganesh</h4>
                    <p class="text-muted">Cool Member</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="../assets/cam.jpeg" alt="" width="90" height="90">
                    <h4>Lau Li Qing</h4>
                    <p class="text-muted">Cool Member</p>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="../assets/cam.jpeg" alt="" width="90" height="90">
                    <h4>Yong Zi Yi</h4>
                    <p class="text-muted">Cool Member</p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="../assets/cam.jpeg" alt="" width="90" height="90">
                    <h4>Hazyra Binte Mohamed Surani</h4>
                    <p class="text-muted">Cool Member</p>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="team-member">
                    <img class="mx-auto rounded-circle" src="../assets/cam.jpeg" alt="" width="90" height="90">
                    <h4>Ranullo Avigale Balisacan</h4>
                    <p class="text-muted">Cool Member</p>
                </div>
            </div>

            </div>
            <div class="row">
            <div class="col-lg-8 mx-auto text-center">
                <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
            </div>
            </div>
        </div>
        </section>

        <!-- Contact -->
        <section id="contact">
        <div class="container">
            <div class="row">
            <div class="col-lg-12 text-center">
                <h2 class="section-heading text-uppercase">Contact Us</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            </div>
            <div class="row">
            <div class="col-lg-12">
                <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div class="row">
                    <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name.">
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address.">
                        <p class="help-block text-danger"></p>
                    </div>
                    <div class="form-group">
                        <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number.">
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <div class="col-md-6">
                    <div class="form-group">
                        <textarea class="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                        <p class="help-block text-danger"></p>
                    </div>
                    </div>
                    <div class="clearfix"></div>
                    <div class="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" class="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </div>
        </section>


        <!-- Footer -->
        <footer>
            <div class="container">
                <div class="row">
                <div class="col-md-4">
                    <span class="copyright">Copyright &copy; kriticalcare 2021</span>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline social-buttons">
                    <li class="list-inline-item">
                        <a href="#">
                        <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                        <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">
                        <i class="fab fa-linkedin-in"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="list-inline quicklinks">
                    <li class="list-inline-item">
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li class="list-inline-item">
                        <a href="#">Terms of Use</a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </footer>
    </div>
</template>


<script>
import Map from '../components/Map.vue'

export default {
  name: 'Locator',
  components: {
    Map
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: white;
}
</style>