<template>
  <div class="home">
    <h1>All Movies</h1>
    <div v-for="movie in movies" :key="movie.id">
      <h2>{{ movie.name }}</h2>
      <img src="box_art" v-bind:alt="movie.name" />
    </div>
  </div>
</template>

<style></style>

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
