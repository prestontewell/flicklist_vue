<template>
  <div id="app">
    <div id="preloader"></div>
    <header class="header">
      <div class="container">
        <div class="header-area">
          <!-- <div class="logo">
            <a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>
          </div> -->
          <div class="header-right">
            <form v-on:submit.prevent="submit()">
              <!-- <select>
                <option value="Movies">Movies</option>
                <option value="Movies">Movies</option>
                <option value="Movies">Movies</option>
              </select> -->
              <input v-model="searchInput" type="text"/>
              <button type="submit"><i class="icofont icofont-search"></i></button>
            </form>
            <ul>
              <li><a href="#">Welcome Guest!</a></li>
              <li><a class="login-popup" href="#">Login</a></li>
            </ul>
          </div>
          <div class="menu-area">
            <div class="responsive-menu"></div>
              <div class="mainmenu">
                <ul id="primary-menu">
                  <li><a class="active" href="/">Home</a></li>
                  <li><a href="movies.html">Movies</a></li>
                  <li><a href="celebrities.html">CelebritiesList</a></li>
                  <li><a href="top-movies.html">Top Movies</a></li>
                  <li><a href="blog.html">News</a></li>
                  <li><a href="#">Pages <i class="icofont icofont-simple-down"></i></a>
                    <ul>
                      <li><a href="blog-details.html">Blog Details</a></li>
                      <li><a href="movie-details.html">Movie Details</a></li>
                    </ul>
                  </li>
                  <li><a class="theme-btn" href="#"><i class="icofont icofont-ticket"></i> Tickets</a></li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </header>
    <div class="login-area">
      <div class="login-box">
        <a href="#"><i class="icofont icofont-close"></i></a>
        <h2>LOGIN</h2>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}"</li>
        </ul>
        <form action="#">
          <h6>USERNAME OR EMAIL ADDRESS</h6>
          <input type="text" />
          <h6>PASSWORD</h6>
          <input type="text" />
          <div class="login-remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <div class="login-signup">
            <span>SIGNUP</span>
          </div>
          <a href="#" class="theme-btn">LOG IN</a>
          <span>Or Via Social</span>
          <div class="login-social">
            <a href="#"><i class="icofont icofont-social-facebook"></i></a>
            <a href="#"><i class="icofont icofont-social-twitter"></i></a>
            <a href="#"><i class="icofont icofont-social-linkedin"></i></a>
            <a href="#"><i class="icofont icofont-social-google-plus"></i></a>
            <a href="#"><i class="icofont icofont-camera"></i></a>
          </div>
        </form>
      </div>
    </div>

    <router-view/>

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6">
            <!-- <div class="widget">
              <img src="assets/img/logo.png" alt="about" />
              <p>7th Harley Place, London W1G 8LZ United Kingdom</p>
              <h6><span>Call us: </span>(+880) 111 222 3456</h6>
            </div> -->
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="widget">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="widget">
              <h4>Account</h4>
              <ul>
                <li><a href="#">My Account</a></li>
                <li><a href="#">Watchlist</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">User Guide</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <!-- <div class="widget">
              <h4>Newsletter</h4>
              <p>Subscribe to our newsletter system now to get latest news from us.</p>
              <form action="#">
                <input type="text" placeholder="Enter your email.."/>
                <button>SUBSCRIBE NOW</button>
              </form>
            </div> -->
          </div>
        </div>
        <hr />
      </div>
      <div class="copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 text-center text-lg-left">
              <div class="copyright-content">
                <p>&copy; 2018 MoviePoint. All Rights Reserved. Designed by octopas</p>
              </div>
            </div>
            <div class="col-lg-6 text-center text-lg-right">
              <div class="copyright-content">
                <a href="#" class="scrollToTop">
                  Back to top<i class="icofont icofont-arrow-up"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  </div>
</template>

<style>

</style>

<script>
import axios from "axios";

export default {

  data: function() {
    return {
      searchInput: "",
      username: "",
      password: "",
      errors: []
    }; 
  },

  methods: {

    submit: function() {
      console.log(this.searchInput);
      this.$router.push("/titles-search/" + this.searchInput);
    },
    submitLogin: function() {
      var params = {
        username: this.username,
        password: this.password
      };
      axios
        .post("/api/sessions", params)
        .then(response => {
          axios.defaults.headers.common["Authorization"] = 
          "Bearer" + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch(error => {
          this.errors  ["Invalid username or password."];
          this.username = "";
          this.password = "";
        });
    }
  }
};

</script>
