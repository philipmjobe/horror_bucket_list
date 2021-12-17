<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.name }}</h2>
      <img v-bind:src="movie.box_art" v-bind:alt="movie.name" />
      <br />
      <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
    </div>
  </div>
</template>

<style>
img {
  height: 400px;
  width: 300px;
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
