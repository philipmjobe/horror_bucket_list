<template>
  <div class="home">
    <div class="background">
      <body>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Click To Sign In</h1>
        <br />
        <br />
        <br />
        <a href="/login"><img src="/assets/img/skull.png" alt="" class="center" /></a>
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
  color: white;
}
.background {
  background-image: url("https://st2.depositphotos.com/1004430/7169/v/600/depositphotos_71697107-stock-illustration-skull-pattern.jpg");
  background-size: 100%;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 600px;
  color: white;
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
      axios.get("/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
