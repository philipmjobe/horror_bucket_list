<template>
  <div class="home">
    <div>
      <body>
        <br />
        <br />
        <br />
        <br />
        <h1>Welcome To Your Worst Nightmare!</h1>
        <h2>Click The Skull To Sign In</h2>
        <br />
        <br />
        <router-link :to="'/login'">
          <img src="/assets/img/skull3.png" alt="" class="center" />
        </router-link>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </body>
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
  color: rgb(57, 221, 16);
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 600px;
  color: rgb(224, 245, 105);
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("https://capstoneprojectbackend-production.up.railway.app/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
