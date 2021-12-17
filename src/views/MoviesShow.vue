<template>
  <div class="movies-show">
    <h2>{{ movie.name }}</h2>
    <img v-bind:src="movie.box_art" v-bind:alt="movie.name" />
    <p>{{ movie.description }}</p>
    <p>{{ movie.sub_genre }}</p>
    <router-link to="/movies">Back to All Movies</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get("/movies/" + this.$route.params.id).then((response) => {
      console.log("movies show", response);
      this.movie = response.data;
    });
  },
};
</script>
