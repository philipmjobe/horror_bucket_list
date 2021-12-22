<template>
  <div class="home">
    <div>
      <body>
        <br />
        <br />
        <br />
        <br />
        <h1>Click To Sign In</h1>
        <br />
        <br />
        <a href="/login"><img src="/assets/img/skull2.png" alt="" class="center" /></a>
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
      axios.get("/movies").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
