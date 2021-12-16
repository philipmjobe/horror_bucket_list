<template>
  <div class="movies-index">
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.name }}</h2>
      <img v-bind:src="movie.box_art" v-bind:alt="movie.name" />
      <button v-on:click="showMovie(movie)">More Info</button>
    </div>
    <dialog id="movie-details">
      <form method="dialog">
        <h1>Movie Info</h1>
        <p>Name: {{ currentMovie.name }}</p>
        <p>Plot: {{ currentMovie.description }}</p>
        <p>Sub Genre: {{ currentMovie.sub_genre }}</p>
        <button>Add To Watch List</button>
        <button>Close</button>
      </form>
    </dialog>
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
      currentMovie: {},
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
    showMovie: function (movie) {
      this.currentMovie = movie;
      document.querySelector("#movie-details").showModal();
    },
  },
};
</script>
