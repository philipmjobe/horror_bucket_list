<template>
  <div class="movies-update">
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <h2>{{ movie.name }}</h2>
    <p style="text-align: center"><img v-bind:src="movie.box_art" v-bind:alt="movie.name" class="thing" /></p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      currentMovieParams: {},
      errors: [],
      movies: [],
    };
  },
  created: function () {
    axios.get(`/movies/ + ${this.$route.params.id}`).then((response) => {
      console.log("movies update:", response.data);
      this.currentMovieParams = response.data;
    });
  },
  methods: {
    updateMovie: function () {
      console.log("Updating Movie");

      axios
        .patch(`/movies/${this.$route.params.id}`, this.currentMovieParams)
        .then((response) => {
          this.$router.push(`/movies-update/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
  },
};
</script>
