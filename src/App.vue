<template>
  <div id="app">
    <div class="background">
      <!-- ======= Header ======= -->
      <header id="header" class="fixed-top d-flex align-items-center">
        <div class="container d-flex align-items-center justify-content-between">
          <h1 class="logo"><a href="index.html">Horror Is Life Bucket List</a></h1>
          <!-- Uncomment below if you prefer to use an image logo -->
          <!-- <a href="index.html" class="logo"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>-->

          <nav id="navbar" class="navbar">
            <ul>
              <li><a class="nav-link to" href="/">Home</a></li>
              <li><a class="nav-link to" href="/movies">Movies</a></li>

              <li class="dropdown">
                <a href="#">
                  <span>Your List</span>
                  <i class="bi bi-chevron-down"></i>
                </a>
                <ul>
                  <li><a href="/list">Not Watched</a></li>
                  <li class="dropdown">
                    <a href="/list">
                      <span>Watched</span>
                      <i class="bi bi-chevron-right"></i>
                    </a>
                    <ul>
                      <li><a href="/list">Loved It!</a></li>
                      <li><a href="/list">Hated It!</a></li>
                    </ul>
                  </li>
                </ul>
              </li>

              <!-- <li><a class="nav-link scrollto" href="#contact">Contact</a></li> -->
              <li><a class="nav-link to" href="/login">Sign In</a></li>
              <li><a class="nav-link to" href="/logout">Log Out</a></li>
              <li><a class="getstarted scrollto" href="/signup">Sign Up</a></li>
            </ul>
            <i class="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <!-- .navbar -->
        </div>
      </header>
      <!-- End Header -->
      <body>
        <!-- Background image -->
        <!-- <div
        class="bg-image"
        style="
          background-image: url('https://images.pexels.com/photos/2848647/pexels-photo-2848647.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500');
          height: 300vh;
        "
      ></div> -->
        <!-- Background image -->
      </body>
      <router-view />

      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="footer-info">
                  <h3>Groovin</h3>
                  <p>
                    A108 Adam Street
                    <br />
                    NY 535022, USA
                    <br />
                    <br />
                    <strong>Phone:</strong>
                    +1 5589 55488 55
                    <br />
                    <strong>Email:</strong>
                    info@example.com
                    <br />
                  </p>
                  <div class="social-links mt-3">
                    <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                    <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Terms of service</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Design</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Web Development</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Product Management</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Marketing</a>
                  </li>
                  <li>
                    <i class="bx bx-chevron-right"></i>
                    <a href="#">Graphic Design</a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-newsletter">
                <h4>Our Newsletter</h4>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright
            <strong><span>Groovin</span></strong>
            . All Rights Reserved
          </div>
          <div class="credits">
            <!-- All the links in the footer should remain intact. -->
            <!-- You can delete the links only if you purchased the pro version. -->
            <!-- Licensing information: https://bootstrapmade.com/license/ -->
            <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/groovin-free-bootstrap-theme/ -->
            Designed by
            <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>
      <!-- End Footer -->

      <a href="#" class="back-to-top d-flex align-items-center justify-content-center">
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  </div>
</template>

<style>
.background {
  background-image: url("https://st2.depositphotos.com/1004430/7169/v/600/depositphotos_71697107-stock-illustration-skull-pattern.jpg");
  background-size: 100%;
}
</style>

<script>
export default {
  data: function () {
    return {};
  },
  methods: {
    isLoggedIn: function () {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>
